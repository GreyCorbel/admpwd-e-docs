---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPublicKeys

## SYNOPSIS
Returns all public keys managed by PDS

## SYNTAX

```powershell
Get-AdmPwdPublicKeys [<CommonParameters>]
```

## DESCRIPTION
Returns Public keys oin Base64 form, suitable for entering into GPO for distribution to clients.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPublicKeys  
```

Returns all public keys managed by PDS

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.UInt32
## OUTPUTS

### AdmPwd.Types.PublicKey
## NOTES

## RELATED LINKS
