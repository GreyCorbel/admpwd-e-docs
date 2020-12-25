---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdPublicKey

## SYNOPSIS
Gets public part of encryption key with given ID from PDS configuration.

## SYNTAX

```powershell
Get-AdmPwdPublicKey [-KeyId] <UInt32> [<CommonParameters>]
```

## DESCRIPTION
Returns public part of Encryption key with given ID in Base64 form, suitable for entering into GPO for distribution to clients.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdPublicKey -KeyID:1
```

Returns public key with ID 1

## PARAMETERS

### -KeyId
Identificator of the key to obtain

```yaml
Type: UInt32
Parameter Sets: (All)
Aliases:

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.UInt32
## OUTPUTS

### AdmPwd.Types.PublicKey
## NOTES

## RELATED LINKS
