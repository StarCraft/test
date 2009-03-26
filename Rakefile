# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require(File.join(File.dirname(__FILE__), 'config', 'boot'))

require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

require 'tasks/rails'




let maplocalleader=";"
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
" Rails  model
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
inoremap <buffer><localleader>hm <c-r>=IMAP_PutTextWithMovement("has_many :<+ +>")<cr>
inoremap <buffer><localleader>ho <c-r>=IMAP_PutTextWithMovement("has_one :<+ +>")<cr>
inoremap <buffer><localleader>bt <c-r>=IMAP_PutTextWithMovement("belongs_to :<+ +>")<cr>
inoremap <buffer><localleader>vf <c-r>=IMAP_PutTextWithMovement("validates_format_of :<+ +>, :with => <+ +>")<cr>
inoremap <buffer><localleader>vc <c-r>=IMAP_PutTextWithMovement("validates_confirmation_of :<++>, :message => <+ should match confirmation +>")<cr>
inoremap <buffer><localleader>vl <c-r>=IMAP_PutTextWithMovement("validates_length_of :<+ +>, <+ 3..7 +>, <+  +>")<cr>
inoremap <buffer><localleader>vp <c-r>=IMAP_PutTextWithMovement("validates_presence_of :<+ +>, :message => <+  +>")<cr>
inoremap <buffer><localleader>vu <c-r>=IMAP_PutTextWithMovement("validates_uniqueness_of :<+ +>, :message => <+ +>")<cr>
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
" Rails  controller
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
inoremap <buffer><localleader>rt <c-r>=IMAP_PutTextWithMovement("redirect_to(<+ path or controller +>)")<cr>
inoremap <buffer><localleader>fe <c-r>=IMAP_PutTextWithMovement("flash[:errors]")<cr>
inoremap <buffer><localleader>fn <c-r>=IMAP_PutTextWithMovement("flash[:notice]")<cr>
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
" Rails  view
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
inoremap <buffer><localleader>o <c-r>=IMAP_PutTextWithMovement("<%= <++> %>")<cr>
inoremap <buffer><localleader>lt <c-r>=IMAP_PutTextWithMovement("link_to(<+ path or controller +>)")<cr>
inoremap <buffer><localleader>js <c-r>=IMAP_PutTextWithMovement("javascript_include_tag('<+ js_name +>')")<cr>
inoremap <buffer><localleader>img <c-r>=IMAP_PutTextWithMovement("image_tag('<+ image.jpg +>')")<cr>
inoremap <buffer><localleader>css <c-r>=IMAP_PutTextWithMovement("stylesheet_link_tag('<+ css_name +>')")<cr>
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
" Rails  view----form
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
inoremap <buffer><localleader>ff <c-r>=IMAP_PutTextWithMovement("<% form_for <+ model +> do \|f\| %>\n<++>\n<% end %>")<cr>
inoremap <buffer><localleader>ft <c-r>=IMAP_PutTextWithMovement("<% form_tag :<+symble+> do \|f\| %>\n<++>\n<% end %>")<cr>
inoremap <buffer><localleader>fs <c-r>=IMAP_PutTextWithMovement("<%= submit_tag '<+ submit +>' %>")<cr>
inoremap <buffer><localleader>tf <c-r>=IMAP_PutTextWithMovement("<%= text_field_tag '<+ name +>' %>")<cr>
inoremap <buffer><localleader>pf <c-r>=IMAP_PutTextWithMovement("<%= password_field_tag '<+ name +>' %>")<cr>
inoremap <buffer><localleader>hf <c-r>=IMAP_PutTextWithMovement("<%= hidden_field_tag '<+ name +>' %>")<cr>
inoremap <buffer><localleader>af <c-r>=IMAP_PutTextWithMovement("<%= text_area_tag '<+ name +>', :rows => '<+ num. +>', cols => '<+ num. +>' %>")<cr>
inoremap <buffer><localleader>sf <c-r>=IMAP_PutTextWithMovement("<%= select_tag '<+ name +>', '<option> <+ options +> <option>' %>")<cr>
inoremap <buffer><localleader>rf <c-r>=IMAP_PutTextWithMovement("<%= radio_button_tag '<+ name +>', '<+ value +>' %>, '<+ checked true or false +>'")<cr>
inoremap <buffer><localleader>cf <c-r>=IMAP_PutTextWithMovement("<%= check_box_tag '<+ name +>', '<+ value +>' %>, 1, '<+ checked true or false +>'")<cr>
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
" Rails snippets
"=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
