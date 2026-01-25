const models = {
  User: require("./user.model").default,
  CompanyMember: require("./companyMember.model").default,
  Project: require("./project.model").default,
  Team: require("./team.model").default,
  Task: require("./task.model").default,
  TaskActivity: require("./taskActivity.model").default,
};

export default models;
