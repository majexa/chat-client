class UsersListBox

  constructor: (@user, @isHomePage, parent) ->
    @container = new Element('div.usersList').inject(parent)
    @initHomeButton()
    @newUsers = new Element('div.title', {html: 'Contacts'}).inject(@container)
    @contacts = new Element('div.contacts').inject(@container)
    @newUsers = new Element('div.title', {html: 'New Users'}).inject(@container)
    @newUsers = new Element('div.newUsers').inject(@container)
    @users = {}

  initHomeButton: ->
    if !@isHomePage
      @homePageBtn = new Element('div.title.btn', {html: '« Go home'}).inject(@container)
      @homePageBtn.addEvent('click', ->
        window.location.hash = window.location.hash.replace /#(.*)\/(\d+)/, '#$1'
        window.location.reload true
      )

  _addNewUser: (user, messagesCount) ->
    if @users[user._id]
      return false
    @users[user._id] = user
    @users[user._id].messageCount = messagesCount
    @users[user._id].el = new Element('div.user', {
      html: user.login + '<span>' + @users[user._id].messageCount + '</span>'
    }).inject(@container)

    if user.selected
      @users[user._id].el.addClass('selected')

    @users[user._id].el.addEvent('click', (->
      @openChat(user.phone)
    ).bind(@))
    return true

  addNewUser: (user, messagesCount) ->
    if @_addNewUser(user, messagesCount) == true
      return
    @users[user._id].messageCount += messagesCount
    @users[user._id].el.getElement('span').set('html', @users[user._id].messageCount)

  openChat: (phone) ->
    window.location = './chat.html#' + @user.login + '/' + phone
    window.location.reload(true)
  addNotice: (userId, notice) ->

window.UsersListBox = UsersListBox