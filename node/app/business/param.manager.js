import paramDAO from '../DAO/paramDAO';

function create() {
    async function query() {
        let result = paramDAO.query();
        if (result) {
            return result;
        }
     }

        //add

    return {
        query: query,
    };
}

export default {
    create: create
};
