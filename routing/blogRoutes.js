import { Router } from 'express'
import {
  getAllBlogs,
  getOneBlog,
  createNewBlog,
  getBlogByUser,
  getBlogByCategory,
  updateBlog,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} from '../controllers/blogControllers.js'
import authenticateToken from '../auth/auth.js'

const blogRouter = Router()

blogRouter.get('/', getAllBlogs)
blogRouter.get('/:id', authenticateToken, getOneBlog)
blogRouter.post('/', authenticateToken, createNewBlog)
blogRouter.post('/update/:id', authenticateToken, updateBlog)
blogRouter.get('/users/:id', authenticateToken, getBlogByUser)
blogRouter.get('/category/:category', authenticateToken, getBlogByCategory)
blogRouter.delete('/delete/:id', authenticateToken, deleteBlog)

blogRouter.post('/like/:id', authenticateToken, likeBlog)
blogRouter.post('/dislike/:id', authenticateToken, dislikeBlog)

export default blogRouter
