class ChatContactsScreen extends ChatScreen

  init: () ->
    @api.request('contacts/get', {}, (r) ->
      console.log(r)
    )

window.ChatContactsScreen = ChatContactsScreen