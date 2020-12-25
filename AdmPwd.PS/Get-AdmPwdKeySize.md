---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdKeySize

## SYNOPSIS
Returns encryption key sizes supported by PDS.

## SYNTAX

```powershell
Get-AdmPwdKeySize [<CommonParameters>]
```

## DESCRIPTION
Supported key sizes are maintained in Password Decryptor service config file.
New key pair can be requested by Key Admin role holder with one of supported key sizes.

Solution uses RSA asymmetric algorithm. To change key sizes ofered by PDS, change [PDS configuration file](~/articles/Specification/Password-Decryption-Service/Configuration.md)

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdKeySize
```

Gets list of supported key sizes

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS
### AdmPwd.Types.KeySize[]

## NOTES

## RELATED LINKS
