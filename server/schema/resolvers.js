const {
    Item, Order, User
} = require("../models");
const {
    AuthenticationError
} = require('apollo-server-express');

const mongoose = require('mongoose')

const {
    signToken
} = require('../utils/auth')

const {
    AuthentificationError
} = require('apollo-server-express');

// resolvers
const resolvers = {
    Query: {
        users: async () => {
            return await User.find({})
        },
        orders: async () => {
            return await Order.find({})
        },
        items: async () => {
            return await Item.find({})
        },
        user: async (parent, args, context) => {
            const user = await User.findOne(args.userId).populate('order')

            if (!user) {
                throw new AuthentificationError('Please log in with a valid user')
            }
            return user;
        },
        order: async (parent, args, context) => {
            const order = await Order.findOne(args.orderId)

            if (!order) {
                throw new AuthentificationError('Please use a valid order')
            }
            return order;
        },
        item: async (parent, args, context) => {
            const item = await Item.findOne(args.itemId).populate('category').populate('photo')

            if (!item) {
                throw new AuthentificationError('Please use a valid item')
            }
            return item;
        }
        

    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(password);
            console.log(password)
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            console.log(token)
            return { token, user };
        }
    }


}

module.exports = resolvers