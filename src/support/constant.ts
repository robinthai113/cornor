import { setWorldConstructor } from "@cucumber/cucumber";

export const TextValue = {
  notificationMessage: "You created a To-do Item in task",
  commentActivityTab: "Comments & Activity",
  okButton: "OK",
  newTaskButton: "New Task",
  deleteButton: "Delete",
  projectNameLabel: "Project Name",
  adminLabel: "Admin",
  nextButton: "Next",
  openToDoFilterText: "Open To-do",
  addNewProjectButton: "Add new project",
  newProjectButton: "New Project",
  createManuallyButton: "Create Manually",
  codeInOpenAirLabel: "Code in OpenAir",
  NoLabel: "No",
  YesLabel: "Yes",
  ReplyButton: "Reply",
  SubmitButton: "Submit",
  publicType: "Public",
  privateType: "Private",
  menuItem: {
    projectsMenu: "Projects",
    myWorkMenu: "My Work",
    homeMenu: "Home",
    solutionMenu: "Solutions",
    professional: "Professionals",
    clients: `Clients`,
  },
  filterItem: {
    roleItem: "Role",
    openToDo: "Open To-do",
    comments: "Comments",
    completedToDo: "Completed To-do",
    all: "All",
  },
  appItem: {
    workSpaceApp: "WorkSpace",
    claraApp: "Clara",
    connorBookApp: "ConnorBook",
    memoCoachApp: "MemoCoach",
    complianceAIApp: "ComplianceAI",
  },
  tabItem: {
    myWorkTab: "My Work",
    todoItemTab: "To-Do Items",
    projectsTab: "Projects",
    engagementsTab: "Engagements",
    commentActivityTab: "Comments & Activity",
    descriptionReferencesTab: "Description & References",
    publicProjectTab: "Public Projects",
    libraryServiceOfferingTab: "Library",
    overviewServiceOfferingTab: "Overview",
    createFieldTab: "Create Field",
    inUseFieldTab: "In Use",
    externalUserManagementTab: "User Management",
    activeRulesTab: "Active Rules",
    inActiveRulesTab: "Inactive Rules",
    permissionTab: "Permissions",
    doccumentManagentTab: "Document Management",
    importAsanaOwnerTab: `Role: Owner`,
    importAsanaTeamMemberTab: `Role: Team Member`,
    documentSuggestions: `Document Suggestions`,
    Library: `Library`,
    cgUserRoleMapsTab: "CG User Role Maps",
    cgUserRoleResourceOperationMapsTab: "CG User Role Resource Operation Maps",
    solutionFeedBackTab: "Feedback",
    skillsTab: `Skills`,
    profileSummary: `Profile Summary`,
    toolsTab: `Tools`,
    professionalExperienceTab: `Professional Experience`,
    projectPlanTab: `Project Plan`,
    updatesTab: "Updates",
    externalResourcesTab: "External Resources",
    solutionOverviewTable: `Solution Overview`,
    soNotificationTab: "Service Offering & Profile",
    ganttChartTab: "Gantt Chart",
    clientFacingProfileTab: `Client Facing Profile`,
    personas: "Personas",
  },
  projectTab: {
    myProjectTab: "My Projects",
    pulicProjectTab: "Public Projects",
    projectRequestTab: "Project Requests",
  },
  buttonName: {

    addDocumentFromLibraryButton: `Add document from library`,
    linkOneDriveGroup: `Link OneDrive Group`,
    fileExplorerButton: `File Explorer`,
    addFilterBtn: `Add Filter`,
    followButton: `Follow`,
    applyGrouping: "Apply Grouping",
    sendFeedBackButton: "Send Feedback",
    suggestionsButton: "Suggestions",
    addUserRoleMapsButton: "Add User Role Maps",
    saveChangesButton: "Save Changes",
    importFormExcel: "Import From Excel",
    showHideColumnButton: "Columns",
    importPlanButton: "Import Plan",
    importFromAsanaButton: "Import From Asana",
    importButton: "Import",
    reorderButton: "Reorder",
    importProjectButton: "Import Project",
    importformExcel: "Import from Excel",
    replyButton: "Reply",
    doneButton: "Done",
    viewMoreButton: "View More",
    markAsCompletedButton: "Mark as Completed",
    addToMyWorkFlowButton: "Add to My Workflow",
    saveButton: "Save",
    saveAndActiveButton: "Save And Activate",
    OKButton: "OK",
    hereButton: "Here",
    restoreButton: "Restore",
    OkButton: "Ok",
    cancelButton: "Cancel",
    postButton: "Post",
    newTaskButton: "New Task",
    discardButton: "Discard",
    customFieldsButton: "Custom Fields",
    addButton: "Add",
    editButton: "Edit",
    uploadButton: "Upload",
    uploadFileButton: "Upload File",
    bulkEditButton: "Bulk Edit",
    editMetadataBtn: "Edit Metadata",
    applyButton: "Apply",
    closeButton: "Close",
    applyChangesButton: "Apply Changes",
    resetButton: "Reset",
    expandAllRow: "Expand All Rows",
    deleteButton: "Delete",
    duplicateButton: "Duplicate",
    deselectButton: "Deselect",
    filterButton: "Filter",
    clearFilterButton: "Clear",
    deleteExternalUserButton: "Delete User",
    inviteClientButton: "Invite Client",
    sendInvitationButton: "Send Invitation",
    joinWorkSpaceButton: "Join WorkSpace",
    requestToJoinButton: "Request to Join",
    revokeRequestButton: "Revoke Request",
    acceptRequest: "Accept Request",
    declineRequest: "Decline Request",
    disMissAll: "Dismiss All",
    shareTaskButton: "Share Task",
    unlinkTaskButtuon: "Unlink Tasks",
    removeButton: "Remove",
    openTaskBinButton: "Open Task Bin",
    bulkRestoreButton: "Bulk Restore",
    addRuleButton: "Add Rule",
    addLinkButton: "Add Link",
    addActionButton: "+ Action",
    addTriggerButton: "+ Trigger",
    backButton: "Back",
    addAdminsButton: "Add Admins",
    addMembersButton: "Add Members",
    addDocument: "Add Documents",
    exportButton: "Export To",
    exportBtn: "Export",
    exportToProjectButton: "Export To Project",
    exporttoProjectButton: "Export to Project",
    exportToEngagementButton: "Export To Engagement",
    exporttoEngagementButton: "Export to Engagement",
    goToProjectButton: "Go To Project",
    goToEngagementButton: "Go To Engagement",
    unPublishButton: "Unpublish",
    publishButton: "Publish",
    newUserButton: "New User",
    newDocument: "New Document",
    newProject: "New Project",
    nextButton: "Next",
    linkButton: "Link",
    movesFileButton: "Move Files",
    replaceDocButton: "Replace Documents",
    runAllRuleButton: "Run All",
    viewInWorkSpace: "View In WorkSpace",
    Suggestions: "Suggestions",
    next: "Next",
    addSuggestion: "Add Suggestions",
    searchTitle: "Search Title",
    searchContent: "Search Content",
    metaDataSearch: "Metadata Search",
    searchButton: "Search",
    saveAsButton: "Save As",
    editSearch: "Edit Search",
    exitSearch: "Exit Search",
    resetToDefaultViewButton: "Reset to Default View",
    saveCurrentFilterView: "Save Current Filter View",
    saveFilterView: "Save Filter View",
    viewSelectedFilters: "View Selected Filters",
    clearAllFilters: "Clear All Filters",
    saveAndExit: "Save & Exit",
    serviceOfferingAndProfile: "Service Offering & Profile",
    profileBuilderButton: `Profile Builder`,
    saveAndExitButton: `Save & Exit`,
    saveAsNewFilterView: `Save As New Filter View`,
    clearGrouping: "Clear Grouping",
    clearAllButton: `Clear All`,
    bulkShareTaskButton: `Share`,
    shareBtn: `Share`,
    showSearchOptionsButton: "Show Search Options",
    clearFiltersButton: "Clear Filters",
    expandAllButton: "Expand All",
    hideTopBarBtn: `Hide Top Bar`,
    showTopBarBtn: `Show Top Bar`,
    saveSearch: `Save Search`,
    savedSearchs: `Saved Searches`,
    buttonAddWorkstream: `Add Workstream`,
    addAnAnnouncementButton: "Add an Announcement",
    addAnUpdateButton: "Add an Update",
    addNewResourceGroupButton: "Add New Resource Group",
    addResourceGroupButton: "Add Resource Group",
    addResourceButton: "Add Resource",
    addResourcesButton: "Add Resources",
    downloadBtn: "Download",
    addNewServiceOfferingButton: "Add New Service Offering",
    solutionPermissionButton: "Solution Permission",
    addATopicExpertButton: "Add a Topic Expert",
    addServiceOfferingButton: "Add Service Offering",
    permissionsViewerButton: "Permissions Viewer",
    reportsButton: "Reports",
    backgroundJobsButton: "Background Jobs",
    addTopicExpertsButton: "Add Topic Experts",
    addOverviewButton: "Add Overview",
    linkSOFolderButton: "Link SO Folder",
    surveyButton: "Survey",
    takeSurveyButton: "Take Survey",
    updateSurveyLinkButton: "Update Survey Link",
    saveSurveyLinkButton: "Save Survey Link",
    approveButton: "Approve",
    paragraphButton: "Paragraph",
    formatButton: "Format",
    heading1: "Heading 1",
    fontSizeButton: "Font Size",
    insertButton: "Insert",
    engagementTasksButton: "Engagement Tasks",
    projectTasksButton: "Project Tasks",
    linkFolderToSOBtn: "Link Folder To SO",
    editSearchBtn: "Edit Search",
    compareAvailabilityButton: "Compare Availability",
    availableTimeButton: "Available Time",
    viewSimilarProfileButton: "View Similar Profile",
    viewSimilarProfilesButton: "View Similar Profiles",
    viewProfessionalProfileButton: "View Professional Profile",
    viewLinkedInProfileButton: "View LinkedIn Profile",
    messageViaSlackButton: "Message Via Slack",
    emailButton: "Email",
    hideFromSearchResultButton: "Hide From Search Results",
    bookedTimeButton: "Booked Time",
    moveTasksToProjectBtn: "Move Tasks to Project",
    moveTasksToEngagementBtn: "Move to Engagement",
    dashboardButton: "Dashboard",
    professionalsDirectoryButton: "Professionals Directory",
    narrativeBio: "Narrative Bio",
    resumeBio: "Resume Bio",
    newSearchBtn: "New Search",
    saveTopicExpertBtn: "Save Topic Expert",
    addLanguageBtn: "Add Language",
    updatesButton: "Updates",
    loginButton: "Login",
    viewFeedbackButton: "View feedback",
    viewDocumentButton: "View Document",
  },
  contextMenuButton: {
    rename: "Rename",
    addAsFrequentResource: `Add as frequent resource`,
    deleteButton: "Delete",
    leaveProjectButton: "Leave Project",
    shareTaskButton: "Share Task",
    replaceButton: "Replace",
    moveButton: "Move",
    archiveButton: "Archive",
    upgradeToTask: "Upgrade to Task",
    makeSelfStandingTask: "Make A Self-Standing Task",
    upgradeToWorkStream: `Upgrade to Work Stream`,
    previewbtn: "Preview",
    downloadbtn: "Download",
  },
  projectFlyout: {
    projectTypeItem: "Project Type",
    openAirCodeItem: "OpenAir Code",
    serviceLineItem: "Service Line",
    tagsItem: "Tags",
    stageItem: "Stage",
    recruitingItem: "Recruiting",
    levelItem: "Level",
    requestedSkillsItem: "Requested Skills",
    otherSkillsItem: "Other Skills",
    requestedToolsItem: "Requested Tools",
    otherToolsItem: "Other Tools",
  },
};
class CustomWorld {
  // Define any global variables you need
  public myGlobalVariable: string | undefined;
}

setWorldConstructor(CustomWorld);
