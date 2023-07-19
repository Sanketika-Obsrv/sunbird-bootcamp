export const parseJSON = (content) => {
    try {
        return JSON.parse(content);
    } catch (err) {
        const lines = content.split(/\r?\n/);
        let jsonArray = [];
        lines.forEach(function (line) {
            try {
                jsonArray.push(JSON.parse(line));
            } catch (err) {
                console.log(err);
            }
        });

        return jsonArray;
    }
}