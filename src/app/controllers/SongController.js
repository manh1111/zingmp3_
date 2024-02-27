const SongService = require("../../services/SongService");


class SongController {
    async getSong(req, res) {
        try {
            let response = await SongService.getSong(req.query.id)

            return res.status(200).json(response)
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from the server"
            })
        }
    }

    async getSongInfo(req, res) {
        try {
            let response = await SongService.getSongInfo(req.query.id)

            return res.status(200).json(response)
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from the server"
            })
        }
    }

    async searchSong(req, res) {
        try {
            let response = await SongService.seachSong(req.query.query)

            return res.status(200).json(response)
        } catch (e) {
            console.log(e);
            return res.status(200).json({
                errCode: -1,
                errMessage: "Error from the server"
            })
        }
    }
}

module.exports = new SongController();
