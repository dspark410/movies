/** @format */
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import 'aos/dist/aos.css'
import './App.css'
import Aos from 'aos'
import Loader from './components/Loader'
import Movies from './components/Movies'

function App() {
	const [input, setInput] = useState('')
	const [movies, setMovies] = useState([])
	const [page, setPage] = useState(1)
	const [initial, setInitial] = useState(true)
	const [loading, setLoading] = useState(true)
	const [skeleton, setSkeleton] = useState(false)

	const API_KEY = process.env.REACT_APP_API_KEY
	const session = JSON.parse(sessionStorage.getItem('movie')) || ''

	const loadMovies = async () => {
		const { data } = await axios.get(
			`https://www.omdbapi.com/?s=dark&type=movie&page=1&apikey=${API_KEY}`
		)
		setMovies(data)
	}

	const getMovies = async (page = 1) => {
		if (input === '') {
			const { data } = await axios.get(
				`https://www.omdbapi.com/?s=${session.trim()}&type=movie&page=${page}&apikey=${API_KEY}`
			)
			setMovies(data)
		} else {
			const { data } = await axios.get(
				`https://www.omdbapi.com/?s=${input.trim()}&type=movie&page=${page}&apikey=${API_KEY}`
			)
			setMovies(data)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		if (input === '') return

		sessionStorage.setItem('movie', JSON.stringify(input))

		setSkeleton(true)
		setTimeout(() => {
			getMovies()
			setInput('')
			setPage(1)
			setInitial(false)
			setSkeleton(false)
		}, 2500)
	}

	const getPreviousPage = () => {
		if (page > 1) {
			setPage((prev) => prev - 1)
		}
	}

	const getNextPage = () => {
		setPage((prev) => prev + 1)
	}

	useEffect(() => {
		let timer = setTimeout(() => {
			loadMovies()
			setLoading(false)
			Aos.init({
				duration: 1000,
			})
		}, 3000)
		return () => {
			clearTimeout(timer)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		let mounted = true
		if (mounted && page > 0) {
			getMovies(page)
		}
		return () => {
			mounted = false
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page])

	if (loading) {
		return <Loader />
	} else {
		return (
			<div data-aos='fade' className='container'>
				<h1>The Shoppies</h1>

				<Movies
					movies={movies}
					skeleton={skeleton}
					handleSubmit={handleSubmit}
					input={input}
					setInput={setInput}
					initial={initial}
					page={page}
					getPreviousPage={getPreviousPage}
					getNextPage={getNextPage}
					session={session}
				/>
			</div>
		)
	}
}

export default App
