/** @format */

import React, { useState, useEffect } from 'react'
import { imageLink } from '../utils/noPoster'
import { MdGrade, AiOutlineClose } from 'react-icons/all'
import MoviesSkeleton from './MoviesSkeleton'

function Movies({ movies, skeleton }) {
	const [nominations, setNominations] = useState(
		JSON.parse(localStorage.getItem('nominations')) || []
	)

	const addNomination = (title, year) => {
		const nominationArr = [...nominations]

		const duplicate = nominationArr
			.map((nomination) => {
				return nomination.title === title
			})
			.includes(true)

		if (!duplicate && nominations.length < 5)
			nominationArr.push({ title, year })

		setNominations(nominationArr)
	}

	const removeNomination = (title, year) => {
		const nominationArr = [...nominations]
		const filteredArr = nominationArr.filter((nomination) => {
			return title !== nomination.title || year !== nomination.year
		})
		setNominations(filteredArr)
	}

	const getActiveClass = (title, year) => {
		const nominationsArr = nominations.filter((nomination) => {
			return nomination.title === title
		})
		if (nominationsArr[0] === undefined) {
			return 'star-icon-inactive'
		} else {
			if (nominationsArr[0].title === title) {
				return 'star-icon-active'
			} else {
				return 'star-icon-inactive'
			}
		}
	}

	const getNominations = (title, year) => {
		const nominationsArr = nominations.filter((nomination) => {
			return nomination.title === title
		})
		if (nominationsArr[0] !== undefined) {
			if (
				nominationsArr[0].title === title &&
				nominationsArr[0].year === year
			) {
				removeNomination(title, year)
			}
		} else {
			addNomination(title, year)
		}
	}

	useEffect(() => {
		localStorage.setItem('nominations', JSON.stringify(nominations))
	}, [nominations])

	return (
		<>
			<div className='nomination-container'>
				<h1>Nomination List</h1>

				{nominations.map((nomination, i) => (
					<div
						key={i}
						className={
							nomination.title.length > 30
								? 'long-nomination-title'
								: 'nomination'
						}>
						<div key={i}>{`${nomination.title} (${nomination.year})`}</div>
						<AiOutlineClose
							className='close-icon'
							onClick={() =>
								removeNomination(nomination.title, nomination.year)
							}
						/>
					</div>
				))}
			</div>
			<div className='movies-container'>
				{skeleton ? (
					<MoviesSkeleton />
				) : (
					movies.Search &&
					movies.Search.map((movie, i) => (
						<div className='movies' key={i}>
							<div className='movie-img-container'>
								<img
									className='movie-img'
									src={movie.Poster !== 'N/A' ? movie.Poster : imageLink}
									alt={movie.Title}
								/>

								<MdGrade
									className={getActiveClass(movie.Title)}
									key={i}
									onClick={() => getNominations(movie.Title, movie.Year)}
								/>
							</div>
							<div className={movie.Title.length > 30 ? 'long-title' : 'title'}>
								{movie.Title}
							</div>
							<div className='year'>{movie.Year}</div>
						</div>
					))
				)}
			</div>

			{movies.Error === 'Movie not found!' && (
				<div className='no-movie'>
					Movie not found. Please be more specific!
				</div>
			)}
			{movies.Error === 'Too many results.' && (
				<div className='too-many-movies'>
					Too many results. Please be more specific!
				</div>
			)}
		</>
	)
}

export default Movies
