---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# New-AdmPwdKeyPair

## SYNOPSIS
Generates new key pair in Password Decryption service

## SYNTAX

```powershell
New-AdmPwdKeyPair [-KeySize] <Int32> [<CommonParameters>]
```

## DESCRIPTION
This cmdlet is used to create a new key pair in Password Decryptor service, with one of supported key sizes.

## EXAMPLES

### Example 1
```powershell
New-AdmPwdKeyPair -KeySize:2048
```

Creates new key pair with key size 2048 bits

## PARAMETERS

### -KeySize
Requested key size in bits

```yaml
Type: Int32
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

### System.Int32
## OUTPUTS

### AdmPwd.Types.PublicKey
## NOTES
Only holders of Key Admin role are allowed to call this cmdlet. Others receive Access Denied error.

For FIPS compliance, key size of at least 2048 bits is required.
For performance reasons, it is not recommended to use keys longer than 4096 bits.

Solution uses RSA asymmetric algorithm. To change key sizes ofered by PDS, change [PDS configuration file](~/articles/Specification/Password-Decryption-Service/Configuration.md)

## RELATED LINKS
