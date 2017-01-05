class ChatApp

  constructor: (@config) ->
    user = Ngn.LocalStorage.json.get('user')
    if !user
      new LoginBoxConnect(new ChatApiBasic(@config), new LoginBox(document.getElement('body')))
      return
    matchChatWithUser = window.location.hash.match(/#(\d+)/)
    if matchChatWithUser
      listBox = new UsersListBox(user, false, document.getElement('body'))
      api = new ChatApiByPhone(user, matchChatWithUser[1], @config)
      new ChatBoxConnect(api, new ChatBox(document.getElement('body'))).start ->
        new UsersListByPhoneConnect(api, listBox).onStart()
    else
      new UsersListConnect(new ChatApiStandby(user, @config), new UsersListBox(user, true, document.getElement('body'))).start()
      new Element('div.homeBox', html: '<h1>Mersal Chat Client 0.0.2</h1><img src="m/img/chat.svg">').inject document.getElement('body')

window.ChatApp = ChatApp