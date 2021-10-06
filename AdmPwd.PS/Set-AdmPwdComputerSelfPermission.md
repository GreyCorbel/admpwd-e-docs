---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Set-AdmPwdComputerSelfPermission

## SYNOPSIS
Gives computers permission to report passwords of their local admin accounts to their own computer account in AD domain.

## SYNTAX

```powershell
Set-AdmPwdComputerSelfPermission [-Identity] <String> [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Gives computers permission to report passwords of their local admin accounts to own computer account in AD.  
This is mandatory action to perform before solution can be used.  
Every computer that is expected to maintain own admin password needs to have this permission delegated.

## EXAMPLES

### Example 1
```powershell
Set-AdmPwdComputerSelfPermission -Identity:MyComputers
```

Delegates permission to report new local admin password to AD to computers under OU MyComputers

## PARAMETERS

### -Identity
Identification of container where to set permissions.
Permissions are then inherited to computers within this container and subcontainers.
  Identity can be either name or distinguishedName of the container

```yaml
Type: String
Parameter Sets: (All)
Aliases: OrgUnit

Required: True
Position: 0
Default value: None
Accept pipeline input: True (ByValue)
Accept wildcard characters: False
```

### -ForestDnsName
DNS Name of AD forest where to find.
If not specified, current forest is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 1
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String[]
### System.String
## OUTPUTS

### AdmPwd.Types.ObjectInfo
## NOTES
Caller needs to have permission to modify ACL on respective container.

## RELATED LINKS
