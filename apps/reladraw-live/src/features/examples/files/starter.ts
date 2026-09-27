// Written for Reladraw Live.
export default String.raw`// Welcome to Reladraw Live. Edit me and the preview updates as you type.
// Positions are relative: you say where things go, reladraw does the math.

node app "Web app"
node app.ui  "Interface"
node app.api "API"  below app.ui

node store "Database"  right of app  level with app

edge app.api -> store  "queries"  from: right  to: left
`;
