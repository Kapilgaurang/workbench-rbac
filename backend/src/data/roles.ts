export let roles = [
  {
    id: "1",
    name: "Owner",
    permissions: ["*"]
  },

  {
    id: "2",
    name: "Admin",
    permissions: [
      "Projects:view",
      "Projects:create",
      "Projects:edit",
      "Projects:delete",
      "Tasks:view",
      "Tasks:create",
      "Tasks:edit",
      "Tasks:delete",
      "Members:view",
      "Members:invite"
    ]
  },

  {
    id: "3",
    name: "Viewer",
    permissions: [
      "Projects:view",
      "Tasks:view",
      "Members:view",
      "Billing:view",
      "Settings:view"
    ]
  }
];