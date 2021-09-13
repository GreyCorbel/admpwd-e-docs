# Set-AdmPwdPdsDeletedObjectsPermission returns access denied
In order for the PDS to retrieve passwords for already deleted computers, it is necessary to delegate special rights for the PDS, which will have access to the cn = 'Deleted Objects' container.
In general, for a new system installation, only the system has the right to objects from the cn = 'Deleted Objects' container. This fact occurs when the user tries to run the powershell cmdlet Set-AdmPwdPdsDeletedObjectsPermission by the user receiving "Access Denied", as shown in the figure below:

![Access denied for cn='Deleted Objects'](/images/PDS/Deleted-Objects-Access-Denied.png)

## Take ownership for cn='Deleted Objects'
The first thing is to open a command line in elevated mode and use the **dsacls** command to take over the rights over cn='Deleted Objects'.
Use following command: 
```command
dsacls "CN=Deleted Objects,DC=mydomain,DC=mycompany,DC=com" /takeownership
```

![](/images/PDS/Deleted-Objects-Takeownership.png)

## Delegate rights for cn='Deleted Objects' to target group
Now, it is possible to delegate rights for a specific group to which it will have rights to read passwords from cn='Deleted Objects' by using: 

```command
dsacls "CN=Deleted Objects,DC=mydomain,DC=mycompany,DC=com" /g mydomain\group:LCRP 
``` 

as following picture:

![](/images/PDS/Deleted-Objects-Takeownership-Group.png)

at this point, it is possible to set permissions for the PDS to retrieve passwords from cn='Deleted Objects' by using the Set-AdmPwdPdsDeletedObjectsPermission routine.

![](/images/PDS/Deleted-Objects-Delegated.png)
