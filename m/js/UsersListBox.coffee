class UsersListBox

  constructor: (@user, @isHomePage, parent) ->
    @container = new Element('div.usersList').inject(parent)
    @initHomeButton()
    new Element('div.title', {html: 'Contacts'}).inject(@container)
    @contacts = new Element('div.contacts').inject(@container)
    new Element('div.title', {html: 'New Users'}).inject(@container)
    @newUsers = new Element('div.newUsers').inject(@container)
    @initLogoutButton()
    @users = {}

  initLogoutButton: ->
    logoutBtn = new Element('div.title.btn', {html: 'Logout'}).inject(@container)
    logoutBtn.addEvent('click', (e) ->
      e.preventDefault()
      Ngn.LocalStorage.remove 'user'
      window.location = './'
      window.location.reload true
    )

  initHomeButton: ->
    if !@isHomePage
      @homePageBtn = new Element('div.title.btn', {html: '« Go home'}).inject(@container)
      @homePageBtn.addEvent('click', ->
        window.location.hash = ''
        window.location.reload true
      )

  _addUser: (user, messagesCount, isNew) ->
    if @users[user._id]
      return false
    if isNew
      container = @newUsers
    else
      container = @contacts
    # --
    @users[user._id] = user
    @users[user._id].messageCount = messagesCount
    if @users[user._id].messageCount
      countTag = '<span>' + @users[user._id].messageCount + '</span>'
    else
      countTag = ''
    @users[user._id].el = new Element('div.user', {
      html: (user.login || user.phone) + countTag
    }).inject(container)
    if user.selected
      @users[user._id].el.addClass('selected')
    @users[user._id].el.addEvent('click', (->
      @openChat(user.phone)
    ).bind(@))
    return true

  addUser: (user, messagesCount) ->
    if @_addUser(user, messagesCount) == true
      return
    @users[user._id].messageCount += messagesCount
    @users[user._id].el.getElement('span').set('html', @users[user._id].messageCount)

  openChat: (phone) ->
    window.location.hash = '#' + phone
    window.location.reload(true)
  addNotice: (userId, notice) ->

window.UsersListBox = UsersListBox