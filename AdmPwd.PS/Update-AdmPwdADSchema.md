---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Update-AdmPwdADSchema

## SYNOPSIS
Prepares AD schema for the solution.

## SYNTAX

```powershell
Update-AdmPwdADSchema [<CommonParameters>]
```

## DESCRIPTION
Prepares AD schema for the solution.

Cmdlet creates 3 new attributes in schema and adds them to mayContain set of computer objects:
- one attribute for admin password
- one attribute for password expiration time
- one attribute for password history

Cmdlet also creates 2 new Extended rights in AD configuration partition:
- Read Local admin password
- Reset Local admin password

## EXAMPLES

### Example 1
```powershell
Update-AdmPwdADSchema
```

Prepares AD schema for the solution.

User running this cmdlet needs to be member of the following roles:
- __Schema Admins__: to be able to extend the AD schema
- __Enterprise Admins__: to be able to create AdmPwd.E Extended Rights in Configuration partition

## PARAMETERS

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

## OUTPUTS

### AdmPwd.Types.DirectoryOperationStatus
## NOTES
Caller needs to have Schema Admin and Enterprise Admin roles.

## RELATED LINKS
