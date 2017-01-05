# connecting api and chat interface logic
class ChatBoxConnect

  constructor: (@chatApi, @chatBox, @usersListBox) ->

  start: (onStart) ->
    @chatApi.start(((toUser) ->
      # startup data for init socket events and interface has loaded
      @toUser = toUser
      @initUsers()
      @chatBox.build(@chatApi.user, toUser, @chatApi.chatId)
      @chatApi.loadHistory()
      @bindHistoryEvent()
      # @initSocketEvent()
      # @bindNewUserMessagesEvent()
      @bindNewMessageEvent()
      @bindSendButton()
      @bindMessageDeliveredStatusChange()
      @bindMessageViewedStatusChange()
      if onStart
        onStart()
    ).bind(@))
    
  initUsers: ->
    @users = {}
    @addUser(@chatApi.user)
    @addUser(@toUser)

  addUser: (user) ->
    @users[user._id] = user

  bindNewUserMessagesEvent: ->
#    console.log 312
#    @chatApi.bind('newUserMessages', ((data) ->
#      for message in data.messages
#        @_addMessage(message)
#        @chatBox.chatMessagesBox.scrollBottom()
#      # на уровне интерфейса отмечаем как просмотрееные
#      @markAsViewed(data.messages)
#    ).bind(@))

  bindNewMessageEvent: ->
    @chatApi.bind('newMessage', ((data) ->
      @addMessage(data.message)
    ).bind(@))

  _addMessage: (message) ->
    @chatBox.chatMessagesBox._addMessage(@users[message.userId], message)

  messages: [],

  addMessage: (message) ->
    @messages.push(message)
    @_addMessage(message)
    @chatBox.chatMessagesBox.scrollBottom()
    @markAsViewedRemitted()

  markAsViewedRemitted: ->
    if @viewedTimeoutId
      clearTimeout(@viewedTimeoutId)
    @viewedTimeoutId = setTimeout((->
      @chatApi.markAsViewed(@messages)
      @messages = []
    ).bind(@), 100)

  bindHistoryEvent: ->
    @chatApi.bind('historyLoaded', ((messages)->
      for i in [messages.length - 1..0] by -1
        @addMessage(messages[i])
      setTimeout((->
        @chatBox.chatMessagesBox.scrollBottom()
      ).bind(@), 1000)
    ).bind(@))

  bindSendButton: ->
    @chatBox.messageInputBox.input.addEvent('keypress', ((e)->
      if e.code == 10 && e.control
        @sendMessage()
    ).bind(@))
    @chatBox.sendMessageButton.button.addEvent('click', (->
      @sendMessage()
    ).bind(@))

  sendMessage: () ->
    message = @chatBox.messageInputBox.input.get('value')
    if !message
      return
    @chatBox.messageInputBox.disable()
    @chatBox.sendMessageButton.disable()
    @chatApi.sendUserMessage(message, @toUser._id, (->
      @chatBox.messageInputBox.cleanup()
      @chatBox.messageInputBox.enable()
      @chatBox.sendMessageButton.enable()
    ).bind(@))

  bindMessageDeliveredStatusChange: () ->
    @chatApi.bind('delivered', ((data)->
      for id in data.messageIds
        @chatBox.chatMessagesBox.messageBoxes[id].markAsDelivered()
    ).bind(@))

  bindMessageViewedStatusChange: () ->
    @chatApi.bind('viewed', ((data)->
      for id in data.messageIds
        @chatBox.chatMessagesBox.messageBoxes[id].markAsViewed()
    ).bind(@))


window.ChatBoxConnect = ChatBoxConnect