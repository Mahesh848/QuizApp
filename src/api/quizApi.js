import { dataStructures } from "./dataStructure"
import { Algorithms } from './algorithms'
import { ComputerNetworks } from './computerNetworks'

const quizzes = [
    {
        id: 1,
        title: 'Data Structures',
        description: 'Qestions on Arrays, LinkedList, Stacks, Queues, Graphs',
        questions: dataStructures,
        time: 10
    },
    {
        id: 2,
        title: 'Algorithms',
        description: 'Questions on sorting searching algorithms and dynamic programming greedy algorithms',
        questions: Algorithms,
        time: 10
    },
    {
        id: 3,
        title: 'Computer Networks',
        description: 'Questions on Basics of computer networks and client-server programming and encryption and decryption algorithms',
        questions: ComputerNetworks,
        time: 10
    }
]

export const getQuizzes = () => {
    return quizzes.map(quiz => {
        return {
            id: quiz.id,
            title: quiz.title,
            description: quiz.description
        }
    })
}

export const getQuiz = (id) => {
    return quizzes.filter(quiz => {
        return quiz.id === id
    })
}