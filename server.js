const express = require("express");
const PORT = 3000;
const app = express();

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);
});