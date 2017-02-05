class ChatScreen

  constructor: (@api) ->
    @container = new Element('div');
    new Element('div.header').inject(@container)
    @init()

  init: () ->

window.ChatScreen = ChatScreen