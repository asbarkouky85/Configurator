CREATE SCHEMA Auth;
GO
/****** Object:  Table [Auth].[DefaultRoles]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[DefaultRoles](
	[Id] [bigint] NOT NULL,
	[UserType] [int] NOT NULL,
	[RoleId] [bigint] NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_DefultUserTypeRole] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[Domains]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[Domains](
	[Id] [bigint] NOT NULL,
	[Name] [varchar](50) NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_Domains] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Auth].[ResourceActions]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[ResourceActions](
	[Id] [bigint] NOT NULL,
	[Name] [varchar](150) NULL,
	[ResourceId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_ResourceActions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Auth].[Resources]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[Resources](
	[Id] [bigint] NOT NULL,
	[Name] [varchar](150) NULL,
	[DomainId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_Resources_1] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Auth].[RoleResourceActions]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[RoleResourceActions](
	[Id] [bigint] NOT NULL,
	[RoleId] [bigint] NOT NULL,
	[ResourceActionId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_RoleResourceActions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[RoleResources]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[RoleResources](
	[Id] [bigint] NOT NULL,
	[RoleId] [bigint] NOT NULL,
	[ResourceId] [bigint] NOT NULL,
	[CanInsert] [bit] NOT NULL,
	[CanUpdate] [bit] NOT NULL,
	[CanDelete] [bit] NOT NULL,
	[CanViewDetails] [bit] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_RoleResources] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[Roles]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[Roles](
	[Id] [bigint] NOT NULL,
	[Name] [nvarchar](150) NULL,
	[TenantDomainId] [bigint] NULL,
	[Description] [nvarchar](300) NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
	[IsUserRole] [bit] NOT NULL CONSTRAINT [DF_Roles_IsUserRole]  DEFAULT ((0)),
	[TenantAppId] [bigint] NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[TenantApps]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[TenantApps](
	[Id] [bigint] NOT NULL,
	[Name] [varchar](150) NULL,
	[DisplayName] [nvarchar](150) NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TenantApps] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Auth].[TenantAppUsers]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[TenantAppUsers](
	[Id] [bigint] NOT NULL,
	[UserId] [bigint] NOT NULL,
	[TenantAppId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TenantAppUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[TenantDomains]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[TenantDomains](
	[Id] [bigint] NOT NULL,
	[TenantId] [bigint] NOT NULL,
	[DomainId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_TenantDomain] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[Tenants]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[Tenants](
	[Id] [bigint] NOT NULL,
	[Code] [varchar](100) NOT NULL,
	[Name] [nvarchar](200) NOT NULL,
	[Description] [ntext] NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_Tenants] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [Auth].[UserParties]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[UserParties](
	[Id] [bigint] NOT NULL,
	[UserId] [bigint] NOT NULL,
	[PartyId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedOn] [datetime] NULL,
	[UpdatedBy] [bigint] NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[UserRoles]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [Auth].[UserRoles](
	[Id] [bigint] NOT NULL,
	[UserId] [bigint] NOT NULL,
	[RoleId] [bigint] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [Auth].[Users]    Script Date: 7/14/2019 4:45:02 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [Auth].[Users](
	[Id] [bigint] NOT NULL,
	[DisplayName] [nvarchar](150) NULL,
	[LogonName] [varchar](50) NULL,
	[Password] [varchar](100) NULL,
	[CustomerId] [bigint] NULL,
	[UserType] [int] NOT NULL CONSTRAINT [DF_Users_UserType]  DEFAULT ((0)),
	[FirstName] [nvarchar](100) NULL,
	[LastName] [nvarchar](100) NULL,
	[Photo] [nvarchar](300) NULL,
	[Gender] [bit] NULL,
	[BirthDate] [datetime] NULL,
	[IsActive] [bit] NOT NULL,
	[CreatedOn] [datetime] NULL,
	[UpdatedOn] [datetime] NULL,
	[CreatedBy] [bigint] NULL,
	[UpdatedBy] [bigint] NULL,
	[TenantId] [bigint] NULL,
	[Email] [varchar](200) NULL,
	[IsDeleted] [bit] NOT NULL,
	[CustomerLogo] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [Auth].[DefaultRoles] ADD  CONSTRAINT [DF_DefultUserTypeRole_UserType]  DEFAULT ((0)) FOR [UserType]
GO
ALTER TABLE [Auth].[DefaultRoles]  WITH CHECK ADD FOREIGN KEY([RoleId])
REFERENCES [Auth].[Roles] ([Id])
GO
ALTER TABLE [Auth].[ResourceActions]  WITH CHECK ADD  CONSTRAINT [FK_ResourceActions_Resources] FOREIGN KEY([ResourceId])
REFERENCES [Auth].[Resources] ([Id])
GO
ALTER TABLE [Auth].[ResourceActions] CHECK CONSTRAINT [FK_ResourceActions_Resources]
GO
ALTER TABLE [Auth].[Resources]  WITH CHECK ADD  CONSTRAINT [FK_Resources_Domains] FOREIGN KEY([DomainId])
REFERENCES [Auth].[Domains] ([Id])
GO
ALTER TABLE [Auth].[Resources] CHECK CONSTRAINT [FK_Resources_Domains]
GO
ALTER TABLE [Auth].[RoleResourceActions]  WITH CHECK ADD  CONSTRAINT [FK_RoleResourceActions_ResourceActions] FOREIGN KEY([ResourceActionId])
REFERENCES [Auth].[ResourceActions] ([Id])
GO
ALTER TABLE [Auth].[RoleResourceActions] CHECK CONSTRAINT [FK_RoleResourceActions_ResourceActions]
GO
ALTER TABLE [Auth].[RoleResourceActions]  WITH CHECK ADD  CONSTRAINT [FK_RoleResourceActions_Roles] FOREIGN KEY([RoleId])
REFERENCES [Auth].[Roles] ([Id])
GO
ALTER TABLE [Auth].[RoleResourceActions] CHECK CONSTRAINT [FK_RoleResourceActions_Roles]
GO
ALTER TABLE [Auth].[RoleResources]  WITH CHECK ADD  CONSTRAINT [FK_RoleResources_Resources] FOREIGN KEY([ResourceId])
REFERENCES [Auth].[Resources] ([Id])
GO
ALTER TABLE [Auth].[RoleResources] CHECK CONSTRAINT [FK_RoleResources_Resources]
GO
ALTER TABLE [Auth].[RoleResources]  WITH CHECK ADD  CONSTRAINT [FK_RoleResources_Roles] FOREIGN KEY([RoleId])
REFERENCES [Auth].[Roles] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [Auth].[RoleResources] CHECK CONSTRAINT [FK_RoleResources_Roles]
GO
ALTER TABLE [Auth].[Roles]  WITH CHECK ADD FOREIGN KEY([TenantAppId])
REFERENCES [Auth].[TenantApps] ([Id])
GO
ALTER TABLE [Auth].[TenantAppUsers]  WITH CHECK ADD  CONSTRAINT [FK_TenantAppUsers_TenantApps] FOREIGN KEY([TenantAppId])
REFERENCES [Auth].[TenantApps] ([Id])
GO
ALTER TABLE [Auth].[TenantAppUsers] CHECK CONSTRAINT [FK_TenantAppUsers_TenantApps]
GO
ALTER TABLE [Auth].[TenantAppUsers]  WITH CHECK ADD  CONSTRAINT [FK_TenantAppUsers_Users] FOREIGN KEY([UserId])
REFERENCES [Auth].[Users] ([Id])
GO
ALTER TABLE [Auth].[TenantAppUsers] CHECK CONSTRAINT [FK_TenantAppUsers_Users]
GO
ALTER TABLE [Auth].[TenantDomains]  WITH CHECK ADD  CONSTRAINT [FK_TenantDomains_Domains] FOREIGN KEY([DomainId])
REFERENCES [Auth].[Domains] ([Id])
GO
ALTER TABLE [Auth].[TenantDomains] CHECK CONSTRAINT [FK_TenantDomains_Domains]
GO
ALTER TABLE [Auth].[TenantDomains]  WITH CHECK ADD  CONSTRAINT [FK_TenantDomains_Tenants] FOREIGN KEY([TenantId])
REFERENCES [Auth].[Tenants] ([Id])
GO
ALTER TABLE [Auth].[TenantDomains] CHECK CONSTRAINT [FK_TenantDomains_Tenants]
GO
ALTER TABLE [Auth].[UserParties]  WITH CHECK ADD  CONSTRAINT [FK_Users_UserParties] FOREIGN KEY([UserId])
REFERENCES [Auth].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [Auth].[UserParties] CHECK CONSTRAINT [FK_Users_UserParties]
GO
ALTER TABLE [Auth].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_Roles] FOREIGN KEY([RoleId])
REFERENCES [Auth].[Roles] ([Id])
GO
ALTER TABLE [Auth].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_Roles]
GO
ALTER TABLE [Auth].[UserRoles]  WITH CHECK ADD  CONSTRAINT [FK_UserRoles_Users] FOREIGN KEY([UserId])
REFERENCES [Auth].[Users] ([Id])
ON UPDATE CASCADE
ON DELETE CASCADE
GO
ALTER TABLE [Auth].[UserRoles] CHECK CONSTRAINT [FK_UserRoles_Users]
GO
ALTER TABLE [Auth].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Tenants] FOREIGN KEY([TenantId])
REFERENCES [Auth].[Tenants] ([Id])
GO
ALTER TABLE [Auth].[Users] CHECK CONSTRAINT [FK_Users_Tenants]
GO
