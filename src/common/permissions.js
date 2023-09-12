const VIEWER = {
  ViewAnalytics: 'View Analytics',
  GenerateReports: 'Generate Reports',
  DownloadReports: 'Download Reports',
};

const INITIATOR = {
  ...VIEWER,
  InitiateActions: 'Initiate Actions',
  AddQuestion: 'Add Question',
};

const AUTHORISER = {
  ...VIEWER,
  ApproveActions: 'Approve Actions',
  DeclineActions: 'Decline Actions',
};

const ADMIN = {
  ...VIEWER,
  AddUser: 'Add User',
  AssignLowerRoles: 'Assign Lower Roles',
  BlockUser: 'Block User',
  ResetPassword: 'Reset Password',
};

const SUPERADMIN = {
  ...VIEWER,
  AddUser: 'Add User',
  AssignAdminRole: 'Assign Admin Role',
  BlockAllUsers: 'Block All Users',
  ResetAllPasswords: 'Reset All Passwords',
};

const Permissions = {
  VIEWER,
  INITIATOR,
  AUTHORISER,
  ADMIN,
  SUPERADMIN,
};

module.exports = Permissions;
