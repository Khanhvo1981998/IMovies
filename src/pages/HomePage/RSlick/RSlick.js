import React, { Component, Fragment, useEffect, useState } from 'react'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Slider from "react-slick";
import { SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, } from '../../../redux/actions/TYPES/ActionType';
import FilmFlip from '../Film/FilmFlip/FilmFlip';
import styleSlick from "../RSlick/RSlick.module.css"
import { useSelector, useDispatch } from "react-redux";
import { Transition } from 'semantic-ui-react';
import { Dialog } from '@mui/material';
import moment from 'moment';
import { Rate } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../hook/useWindowDimensions';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-prev']}`}
            style={{ ...style, display: "block", }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} ${styleSlick['slick-next']}`}
            style={{ ...style, display: "block", left: '-50px' }}
            onClick={onClick}
        />
    );
}



const RSlick = (props) => {

    const { arrFilm } = props // test

    // console.log(arrFilm, "ArrPhim");

    const dispatch = useDispatch()
    const { dangChieu, sapChieu } = useSelector(state => state.QuanLyPhimReducer)

    const renderFilms = () => {
        return props.arrFilm.slice(0, 12).map((item, index) => {
            return <div className='' key={index}>
                <FilmFlip item={item} arrFilm={arrFilm} />

            </div>
        })
    }

    let activeDangChieu = dangChieu === true ? 'active_Film' : "non_activeFilm";
    let activeSapChieu = sapChieu === true ? 'active_Film' : "non_activeFilm";

    const settings = {
        className: "center variable-width",
        centerMode: true,
        centerPadding: "60px",
        rows: 2,
        speed: 50,
        slidesPerRow: 1,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // dots: true,
    };
    return (
        <div>
            <button type="button" class={`button-phim px-8 py-3 font-semibold rounded bg-gray-800 text-white ${styleSlick[activeDangChieu]} `} onClick={() => {
                const action = { type: SET_FILM_DANG_CHIEU }
                dispatch(action)
            }}>
                Phim Dang Chieu</button>
            <button type="button" class={`button-phim px-8 py-3 font-semibold rounded bg-white text-gray border border-gray-800 ml-2 ${styleSlick[activeSapChieu]}`} onClick={() => {
                const action = { type: SET_FILM_SAP_CHIEU }
                dispatch(action)
            }}>Phim Sap Chieu</button>

            <Slider {...settings}>
                {renderFilms()}


            </Slider>
        </div >
    )
}


export default RSlick;

