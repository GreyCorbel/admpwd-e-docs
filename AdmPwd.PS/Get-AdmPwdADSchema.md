---
external help file: AdmPwd.PS.dll-Help.xml
Module Name: AdmPwd.PS
schema: 2.0.0
---

# Get-AdmPwdADSchema

## SYNOPSIS
Gets AD schema attributes for the solution and their schema GUIDs.

## SYNTAX

```powershell
Get-AdmPwdADSchema [[-ForestDnsName] <String>] [<CommonParameters>]
```

## DESCRIPTION
Gets AD schema attributes for the solution.  
Cmdlet is useful when you setup auditing on AD level and need to know GUIDs of attributes for definition of event filters.

## EXAMPLES

### Example 1
```powershell
Get-AdmPwdADSchema
```

Gets solution specific attributes from AD schema.

## PARAMETERS

### -ForestDnsName
DNS Name of AD forest where to find. If not specified, forest where PDS is installed is used.

```yaml
Type: String
Parameter Sets: (All)
Aliases:

Required: False
Position: 0
Default value: None
Accept pipeline input: False
Accept wildcard characters: False
```

### CommonParameters
This cmdlet supports the common parameters: -Debug, -ErrorAction, -ErrorVariable, -InformationAction, -InformationVariable, -OutVariable, -OutBuffer, -PipelineVariable, -Verbose, -WarningAction, and -WarningVariable. For more information, see [about_CommonParameters](http://go.microsoft.com/fwlink/?LinkID=113216).

## INPUTS

### System.String
## OUTPUTS

### AdmPwd.Types.AdmPwdSchemaAttribute
## NOTES
Caller's identity is used to authenticate the request, even when reaching to remote forest.
## RELATED LINKS
