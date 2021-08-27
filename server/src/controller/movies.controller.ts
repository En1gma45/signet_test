import HttpStatusCodes from "http-status-codes";
import csvtojson from 'csvtojson'
import * as fs from 'fs'

class MovieController {
    async fetchMovies(req: any, res: any) {
        try {
            const file = fs.readFileSync('src/test.csv', 'utf8')
            const json = await csvtojson({
                noheader: false,
                output: 'json'
            }).fromString(file)
            switch (req.query.sortBy) {
                case 'year':
                    json.sort((curr, next) => {
                        return curr.year - next.year
                    })
                    break;
                case 'genre1':
                    json.sort((curr, next) => {
                        if (curr.genre1 > next.genre1) return 1
                        if (curr.genre1 < next.genre1) return -1
                        return 0
                    })
                    break;
                case 'genre2':
                    json.sort((curr, next) => {
                        if (curr.genre2 > next.genre2) return 1
                        if (curr.genre2 < next.genre2) return -1
                        return 0
                    })
                    break;
                default:
                    console.log("Smth went wrong");
                    break;
            }
            return res.status(HttpStatusCodes.OK).json(json);
        } catch (error) {
            throw new Error('Smth went wrong')
        }
    }
}


export default new MovieController();