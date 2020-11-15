const quizzes = [
    {
        id: 1,
        title: 'Data Structures',
        description: 'Qestions on Arrays, LinkedList, Stacks, Queues, Graphs'
    },
    {
        id: 2,
        title: 'Algorithms',
        description: 'Questions on sorting searching algorithms and dynamic programming greedy algorithms'
    },
    {
        id: 3,
        title: 'Computer Networks',
        description: 'Questions on Basics of computer networks and client-server programming and encryption and decryption algorithms'
    }
]

export const getQuizzes = () => {
    return quizzes
}