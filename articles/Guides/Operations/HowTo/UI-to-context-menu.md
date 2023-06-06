# Add show password feature to ADUC snap-in context menu
To be able to te open AdmPwd.E UI for specific computer by right clicking target computer object in ADUC, you have to install management tools to computer where ADUC snap-in is installed in.
Once you install management tools, follow these steps:

1. open Notepad, and paste following VBS script: 

```vb
' Addmenu.vbs adds the menu item to run Frommenu.vbs
' from user object's context menu in the admin snap-ins.

On Error Resume Next
Set root= GetObject("LDAP://rootDSE")

If (Err.Number <> 0) Then
    BailOnFailure Err.Number, "on GetObject method"
End If
    sConfig = root.Get("configurationNamingContext")

    'hardcoded for computer class.
    sClass = "computer"
    
    'hardcoded for US English
    sLocale = "409"

    sPath = "LDAP://cn=" & sClass & "-Display,cn=" & sLocale & ",cn=DisplaySpecifiers," & sConfig
    show_items "Display Specifier: " & sPath

Set obj= GetObject(sPath)
If (Err.Number <> 0) Then
    BailOnFailure Err.Number, "on GetObject method"
End If
    'TODO--check if this is already there.
    'Add the value for the context menu
    sValue = "10,Show AdmPwd Password,C:\Program Files\AdmPwd\UI\AdmPwd.UI.exe"
    vValue = Array(sValue)
    obj.PutEx 3, "adminContextMenu", vValue
If (Err.Number <> 0) Then
    BailOnFailure Err.Number, "on IADs::PutEx method"
End If
' Commit the change.
    obj.SetInfo
If (Err.Number <> 0) Then
    BailOnFailure Err.Number, "on IADs::SetInfo method"
End If
 
show_items "Success! Added value to adminContextMenu property of user-Display: " & sValue
 
''''''''''''''''''''
' Display subroutines
''''''''''''''''''''
Sub show_items(strText)
    MsgBox strText, vbInformation, "Add admin context menu"
End Sub
 
Sub BailOnFailure(ErrNum, ErrText)    strText = "Error 0x" & Hex(ErrNum) & " " & ErrText
    MsgBox strText, vbInformation, "ADSI Error"
    WScript.Quit
End Sub
```

2. save file as addmenu.vbs to c:\
3. run this vbs script
4. open ADUC
5. find specific computer object and right click on it
6. pick option "Show AdmPwd Password"
