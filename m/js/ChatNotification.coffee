$ ->
  if window.Notification
    $("#requestPermission").on "click", ->
      Notification.requestPermission()
    $("#checkPermission").on "click", ->
      if Notification.permission
        ## Firefox
        $("#result").text Notification.permission
      else
        ## Chrome
        $("#result").text (new Notification "check").permission

    $("#show").on "click", ->
      notification = new Notification $("[name=title]").val(),
        tag: $("[name=tag]").val()
        body: $("[name=body]").val()
        iconUrl: $("[name=icon]").val()  ## Firefox
        icon: $("[name=icon]").val()     ## Chrome

      notification.onclick = ->
        notification.close()
        ## chrome only
        ## If the window is minimized, restore the size of the window
        window.open().close()
        window.focus()