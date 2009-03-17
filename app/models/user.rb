class User < ActiveRecord::Base
  validates_presence_of :username, :email, :password, :message => '不能为空'
  validates_length_of :username, :within => 3..10, :too_short => '不能少于3个字符', :too_long => '不能超过10个字符'
  validates_uniqueness_of :username, :email, :message => '已经存在'
  validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i, :message => '的格式不正确'
  validates_confirmation_of :password, :message => '输入的不一致'
  attr_accessor :password_confirmation

  ColumnNames = {
    :username => '用户名', :password => '密码', :email => '邮箱'
  }
  def self.human_attribute_name (attr)
      human_attribute_names = (self.const_defined? "ColumnNames") ? self::ColumnNames : {}
      human_attribute_names[attr.to_sym] || attr.humanize
  end
  def password
    @password
  end

  def password= (pwd)
    @password = pwd
    return if @password.blank?
    create_a_salt
    self.hashed_password = User.encrypt_password(self.password, self.salt)
  end

  def self.authenticate(username,password)
    if user = self.find_by_username(username)
      if user.hashed_password != encrypt_password(password, user.salt)
        user = nil
      end
    end
  end

  private
  def create_a_salt
    self.salt = self.object_id.to_s + rand.to_s
  end
  def self.encrypt_password(password,salt)
    string_to_hash = password + 'D3JI' + salt
    Digest::SHA1.hexdigest(string_to_hash)
  end

end
