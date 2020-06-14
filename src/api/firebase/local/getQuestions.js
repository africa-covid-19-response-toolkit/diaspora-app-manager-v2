import firebase from "../firestore";

const getQuestions = async () => {
    const snapshot = await firebase
        .firestore()
        .collection("questions")
        .orderBy(firebase.firestore.FieldPath.documentId())
        .get();
    const rawData = snapshot.docs.map(doc => ({
        id: doc.id, 
        ...doc.data()
    }));

    // Currently, the questions collection contains messages.
    // They need to be deleted. Until then, we'll filter.
    const filteredData = filterQuestions(rawData);
    return sortQuestions(filteredData);
}

const filterQuestions = questions => {
    return questions.filter((currQuestion) => {
        return parseInt(currQuestion.id) >= 0;
    });
};

const sortQuestions = questions => {
    return questions.sort((doc1, doc2) => {
        return doc1.id - doc2.id;
    });
};

export default getQuestions; 