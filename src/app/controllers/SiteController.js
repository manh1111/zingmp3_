const HomeService = require("../../services/HomeService");

class SiteControllers {

    async home(req, res) {
        try {
            let response = await HomeService.getHome();
            return res.status(200).json(response.data);
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from the server"
            });
        }
    }
}

module.exports = new SiteControllers();
