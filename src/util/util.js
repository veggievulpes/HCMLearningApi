const request = require('request')
const cred = require('./cred')

getData = (assignmentRecordId, callback) => {

    const url = `https://${cred.pod}/hcmRestApi/resources/${cred.version}/learnerLearningRecords/?q=assignmentRecordId="${assignmentRecordId}"`
    console.log(url)
    request.get({
            url: url,
            json: true,
            auth: {
                'user': cred.userName,
                'pass': cred.passWord,
                'sendImmediately': true
            }
        },

        (err, response) => {
            if (err) {
                callback({
                    message: `Something wrong is not right ${err}`,
                    code: 500
                }, undefined)
            }

            if (response.body === undefined || response.body.items[0] === undefined) {

                callback({
                    message: `Asset does not exist!`,
                    code: 404
                }, undefined)
                return
            }
            const parsedJSON = response.body.items[0]
            const {
                assignedToDisplayName,
                learningItemTitle,
                assignedDate,
                completedDate,
                assignmentSubStatus,
                expectedEffortInHours,
                assignerDisplayName
            } = parsedJSON
            callback(undefined, {
                assignedToDisplayName,
                learningItemTitle,
                assignedDate,
                completedDate,
                assignmentSubStatus,
                expectedEffortInHours,
                assignerDisplayName
            })
        })
}

module.exports = getData