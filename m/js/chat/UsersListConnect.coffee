# connecting api and users list interface logic
class UsersListConnect

  constructor: (@chatApi, @usersListBox) ->

  start: ->
    @chatApi.start(((toUser)->
      @onStart()
    ).bind(@))

  onStart: ->
    @loadContactsFromMessages()
    @loadChatList()
    @waitForNewUserMessages()

  loadContactsFromMessages: ->
    @chatApi.request('contacts/getFromMessages', {
      token: @chatApi.token
    }, ((userIds)->
      for userId in userIds
        @addToNewUsersList(userId, 0)
    ).bind(@))

  loadChatList: ->

    @chatApi.request('user/chats', {
      token: @chatApi.token
    }, ((chats)->
      for chat in chats
        console.log('CHAT: ' + chat.chatId);

#        new Element('div', {
#          html: chat.chatId
#        }).inject(@usersListBox)
#        #





    ).bind(@))


  waitForNewUserMessages: ->
    @chatApi.bind('newUserMessages', ((data) ->
      counts = {}
      for message in data.messages
        if !counts[message.userId]
          counts[message.userId] = 0
        counts[message.userId]++
      for userId of counts
        @addToNewUsersList(userId, counts[userId])
    ).bind(@))

  addToNewUsersList: (userId, messagesCount) ->
    @chatApi.loadUserInfo(userId, ((user)->
      if @chatApi.toUser && @chatApi.toUser._id == user._id # TODO hack. move to UsersListByPhoneConnect
        user.selected = true
      @usersListBox.addUser(user, messagesCount)
    ).bind(@))

window.UsersListConnect = UsersListConnect