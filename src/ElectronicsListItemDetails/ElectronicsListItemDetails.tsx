import * as React from "react";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import { Carousel } from 'react-carousel-minimal';
import HeadSection from '../HeadSection/Header'
import { useState, useEffect } from "react";
import { BsChatLeft, BsTelephone } from "react-icons/bs";
import { differenceInDays } from "date-fns";
import { AiOutlineUser } from "react-icons/ai";
import { SlWrench } from "react-icons/sl";
import { RiShieldCheckLine } from "react-icons/ri";
import Stack from '@mui/material/Stack'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { GrFavorite } from "react-icons/gr";
import { MdFavorite, MdLocationPin } from "react-icons/md";
import ElectricImageCarousel from './electronicsListItemCarousel'

import "./electronicsListItemDetails.css";

const similarfilterButtons = [{ name: 'Luxury', id: 1 }, { name: 'Hatchback', id: 2 }, { name: 'Sedan', id: 3 }, { name: 'SUV', id: 4 }, { name: 'MUV', id: 5 }]


const ElectronicsListItemDetails = (props) => {
    const initialListItemDetails = {
        "listing_id": 4821,
        "author_id": 1,
        "title": "Car 2",
        "pricing_type": "price",
        "price": "98,763",
        "max_price": "0",
        "price_type": "fixed",
        "price_units": [],
        "price_unit": "",
        "categories": [
            {
                "term_id": 146,
                "name": "Cars",
                "slug": "cars",
                "term_group": 0,
                "term_taxonomy_id": 146,
                "taxonomy": "rtcl_category",
                "description": "",
                "parent": 62,
                "count": 11,
                "filter": "raw"
            }
        ],
        "ad_type": "sell",
        "status": "publish",
        "images": [
            {
                "ID": 4822,
                "title": "image-1-1",
                "caption": "",
                "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                "alt": "",
                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png 155w, https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-9x12.png 9w, https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-108x140.png 108w",
                "sizes": {
                    "full": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                        "width": 155,
                        "height": 201
                    },
                    "medium": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                        "width": 155,
                        "height": 201
                    },
                    "thumbnail": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-150x150.png",
                        "width": 150,
                        "height": 150
                    }
                },
                "src_w": 155,
                "src_h": 201,
                "srcset_sizes": "(max-width: 155px) 100vw, 155px"
            }
        ],
        "created_at": "2023-04-26 12:53:59",
        "created_at_gmt": "2023-04-26 12:53:59",
        "view_count": 2,
        "promotions": [
            "featured",
            "_top"
        ],
        "badges": [
            "is-featured",
            "is-new",
            "is-sell",
            "is-top"
        ],
        "contact": {
            "locations": [],
            "latitude": "13.099860410700474",
            "longitude": "80.20353760722685",
            "hide_map": false,
            "zipcode": "",
            "address": "",
            "phone": "+919094799125",
            "whatsapp_number": "",
            "email": "mansour@colourful.website",
            "website": "",
            "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
        },
        "store": {
            "id": 3015,
            "title": "My Store"
        },
        "url": "https://backend.colourful.work/listing/car-2/",
        "description": "1234567\r\n123456",
        "video_urls": [],
        "author": {
            "first_name": "Mansour",
            "last_name": "M",
            "description": "",
            "id": 1,
            "isAdmin": true,
            "email": "mansour@colourful.website",
            "username": "admin",
            "phone": "+919094799125",
            "whatsapp_number": "+919094799125",
            "website": "",
            "locations": [],
            "zipcode": "",
            "address": "",
            "latitude": "13.099860410700474",
            "longitude": "80.20353760722685",
            "pp_thumb_url": "https://gravatar.com/avatar/c6371b8911a61765da03e51cb97ad98f?s=80&d=mm",
            "membership": {
                "is_expired": false,
                "expired_at": "9999-12-04 00:00:00",
                "remaining_ads": "52",
                "posted_ads": "3",
                "promotions": []
            },
            "store": true
        },
        "custom_fields": [
            {
                "id": 4761,
                "meta_key": "_field_4761",
                "label": "Model",
                "slug": "model",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "select",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "audi",
                "options": {
                    "default": null,
                    "choices": [
                        {
                            "id": "alfa-romeo",
                            "name": "Alfa Romeo"
                        },
                        {
                            "id": "audi",
                            "name": "Audi"
                        },
                        {
                            "id": "bmw",
                            "name": "Bmw"
                        },
                        {
                            "id": "buick",
                            "name": "Buick"
                        },
                        {
                            "id": "cadillac",
                            "name": "Cadillac"
                        },
                        {
                            "id": "changan",
                            "name": "Changan"
                        },
                        {
                            "id": "chery",
                            "name": "Chery"
                        },
                        {
                            "id": "chevrolet",
                            "name": "Chevrolet"
                        },
                        {
                            "id": "chrysler",
                            "name": "Chrysler"
                        },
                        {
                            "id": "citroen",
                            "name": "Citroen"
                        },
                        {
                            "id": "daewoo",
                            "name": "Daewoo"
                        },
                        {
                            "id": "daihatsu",
                            "name": "Daihatsu"
                        },
                        {
                            "id": "datsun",
                            "name": "Datsun"
                        },
                        {
                            "id": "ferrari",
                            "name": "Ferrari"
                        },
                        {
                            "id": "dodge",
                            "name": "Dodge"
                        },
                        {
                            "id": "fiat",
                            "name": "Fiat"
                        }
                    ]
                }
            },
            {
                "id": 4804,
                "meta_key": "_field_4804",
                "label": "Kilometers Run",
                "slug": "kilometers-run",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "number",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "1234",
                "min": "",
                "max": "",
                "step_size": "1"
            },
            {
                "id": 4805,
                "meta_key": "_field_4805",
                "label": "Trim",
                "slug": "trim",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "2.5"
            },
            {
                "id": 4806,
                "meta_key": "_field_4806",
                "label": "Regional Specs",
                "slug": "regional-specs",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "can"
            },
            {
                "id": 4807,
                "meta_key": "_field_4807",
                "label": "Color",
                "slug": "color",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "red"
            }
        ],
        "related": [
            {
                "listing_id": 4809,
                "author_id": 1,
                "title": "Tata Nano",
                "pricing_type": "price",
                "price": "12,300",
                "max_price": "0",
                "price_type": "negotiable",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4810,
                        "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-657x493.png",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-657x493.png 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-1024x768.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-768x576.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-16x12.png 16w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-180x135.png 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png 1242w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                "width": 1242,
                                "height": 932
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                "width": 300,
                                "height": 225
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 657,
                        "src_h": 493,
                        "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                    }
                ],
                "created_at": "2022-12-16 14:30:33",
                "created_at_gmt": "2022-12-16 14:30:33",
                "view_count": 9,
                "promotions": [
                    "featured",
                    "_top",
                    "_bump_up"
                ],
                "badges": [
                    "is-featured",
                    "is-new",
                    "is-sell",
                    "is-top",
                    "is-bump-up"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "13.099860410700474",
                    "longitude": "80.20353760722685",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "9094700125",
                    "whatsapp_number": "",
                    "email": "mansour@colourful.website",
                    "website": "",
                    "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                },
                "store": {
                    "id": 3015,
                    "title": "My Store"
                }
            },
            {
                "listing_id": 4509,
                "author_id": 5,
                "title": "corporate test",
                "pricing_type": "price",
                "price": "29,021",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4510,
                        "title": "211427226_332751175072695_1839557478543784971_n",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-870x489.jpg",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-870x489.jpg 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-18x10.jpg 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-180x101.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg 960w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg",
                                "width": 960,
                                "height": 540
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-300x169.jpg",
                                "width": 300,
                                "height": 169
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-150x150.jpg",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 870,
                        "src_h": 489,
                        "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                    }
                ],
                "created_at": "2022-12-14 10:50:36",
                "created_at_gmt": "2022-12-14 10:50:36",
                "view_count": 6,
                "promotions": [],
                "badges": [
                    "is-new",
                    "is-sell"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "",
                    "longitude": "",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "990900999",
                    "whatsapp_number": "",
                    "email": "corporate@colourful.works",
                    "website": "",
                    "geo_address": ""
                }
            },
            {
                "listing_id": 4484,
                "author_id": 1,
                "title": "Hello car nice car",
                "pricing_type": "price",
                "price": "1,900",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4485,
                        "title": "2-4-1",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-631x493.jpg",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-631x493.jpg 631w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-300x234.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-768x600.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-15x12.jpg 15w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-180x140.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg 1024w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg",
                                "width": 1024,
                                "height": 800
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-300x234.jpg",
                                "width": 300,
                                "height": 234
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-150x150.jpg",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 631,
                        "src_h": 493,
                        "srcset_sizes": "(max-width: 631px) 100vw, 631px"
                    },
                    {
                        "ID": 4600,
                        "title": "Screenshot-2022-12-14-at-6.34.20-PM",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM.png",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-870x404.png",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-870x404.png 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-300x139.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-1024x475.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-768x356.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-1536x713.png 1536w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-2048x950.png 2048w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-18x8.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-180x84.png 180w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM.png",
                                "width": 2052,
                                "height": 952
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-300x139.png",
                                "width": 300,
                                "height": 139
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-150x150.png",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 870,
                        "src_h": 404,
                        "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                    },
                    {
                        "ID": 4601,
                        "title": "Screenshot-2022-11-16-at-7.03.33-PM",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-870x289.png",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-870x289.png 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-300x100.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-1024x341.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-768x255.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-1536x511.png 1536w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-18x6.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-180x60.png 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png 2026w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png",
                                "width": 2026,
                                "height": 674
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-300x100.png",
                                "width": 300,
                                "height": 100
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-150x150.png",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 870,
                        "src_h": 289,
                        "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                    }
                ],
                "created_at": "2022-12-12 13:36:56",
                "created_at_gmt": "2022-12-12 13:36:56",
                "view_count": 16,
                "promotions": [],
                "badges": [
                    "is-new",
                    "is-sell"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "13.07829272527648",
                    "longitude": "80.25242491977681",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "9906417200",
                    "whatsapp_number": "",
                    "email": "mansour@colourful.website",
                    "website": "",
                    "geo_address": "CMWSSB Division 104, Ward 104, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                },
                "store": {
                    "id": 3015,
                    "title": "My Store"
                }
            },
            {
                "listing_id": 4271,
                "author_id": 4,
                "title": "Honda car sale",
                "pricing_type": "price",
                "price": "40,000",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4272,
                        "title": "DG1",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-775x493.jpg",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-775x493.jpg 775w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-300x191.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-768x489.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-18x12.jpg 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-180x115.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg 1006w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg",
                                "width": 1006,
                                "height": 640
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-300x191.jpg",
                                "width": 300,
                                "height": 191
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-150x150.jpg",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 775,
                        "src_h": 493,
                        "srcset_sizes": "(max-width: 775px) 100vw, 775px"
                    }
                ],
                "created_at": "2022-11-12 12:32:57",
                "created_at_gmt": "2022-11-12 12:32:57",
                "view_count": 10,
                "promotions": [],
                "badges": [
                    "is-sell"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "",
                    "longitude": "",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "971504665019",
                    "whatsapp_number": "971504665019",
                    "email": "kmddeen@gmail.com",
                    "website": "",
                    "geo_address": "Discovery Garden"
                },
                "store": {
                    "id": 1173,
                    "title": "Buynzell"
                }
            }
        ],
        "review": {
            "rating": {
                "average": "0",
                "count": 0
            }
        }
    }

    const ElectronicsListItemDetails ={ 
        "data":[
            
                {
                    "listing_id": 2809,
                    "author_id": 1,
                    "title": "iPhone 13 pro",
                    "pricing_type": "price",
                    "price": "12,300",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://images.unsplash.com/photo-1672906674630-67866460f965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTMlMjBwcm8lMjBtYXh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2812,
                    "author_id": 1,
                    "title": "Poco M3",
                    "pricing_type": "price",
                    "price": "8,300",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://i.gadgets360cdn.com/large/poco_m3_display_1612531876808.jpg",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2810,
                    "author_id": 1,
                    "title": "Redmi K20",
                    "pricing_type": "price",
                    "price": "8,300",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://emibaba.com/wp-content/uploads/2019/11/redmi-k20-red-5.jpg",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2813,
                    "author_id": 1,
                    "title": "Samsung 4K LED",
                    "pricing_type": "price",
                    "price": "14,300",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://images.samsung.com/is/image/samsung/p6pim/in/feature/130517137/in-feature-uhd-4k-tv-437074650?$FB_TYPE_A_MO_JPG$",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2814,
                    "author_id": 1,
                    "title": "Havells Electric Geyser",
                    "pricing_type": "price",
                    "price": "6,200",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://m.media-amazon.com/images/I/51zfltcF4hL._SX425_.jpg",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2815,
                    "author_id": 1,
                    "title": "Havells Hair Dryer",
                    "pricing_type": "price",
                    "price": "2,200",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://m.media-amazon.com/images/I/51DJQvrIuZL._SL1200_.jpg",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                },
                {
                    "listing_id": 2816,
                    "author_id": 1,
                    "title": "Usha iron box",
                    "pricing_type": "price",
                    "price": "1,270",
                    "max_price": "0",
                    "price_type": "negotiable",
                    "price_units": [],
                    "price_unit": "",
                    "categories": [
                        {
                            "term_id": 146,
                            "name": "Electronicd",
                            "slug": "Electronics",
                            "term_group": 0,
                            "term_taxonomy_id": 146,
                            "taxonomy": "rtcl_category",
                            "description": "",
                            "parent": 62,
                            "count": 11,
                            "filter": "raw"
                        }
                    ],
                    "ad_type": "sell",
                    "status": "publish",
                    "images": [
                        {
                            "ID": 4810,
                            "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                            "caption": "",
                            "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                            "alt": "",
                            "src": "https://5.imimg.com/data5/SELLER/Default/2021/5/DG/NT/ZI/123616078/usha-iron-box-500x500.jpg",
                            "sizes": {
                                "full": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                    "width": 1242,
                                    "height": 932
                                },
                                "medium": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                    "width": 300,
                                    "height": 225
                                },
                                "thumbnail": {
                                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                    "width": 150,
                                    "height": 150
                                }
                            },
                            "src_w": 657,
                            "src_h": 493,
                            "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                        }
                    ],
                    "created_at": "2022-12-16 14:30:33",
                    "created_at_gmt": "2022-12-16 14:30:33",
                    "view_count": 8,
                    "promotions": [
                        "featured",
                        "_top",
                        "_bump_up"
                    ],
                    "badges": [
                        "is-featured",
                        "is-new",
                        "is-sell",
                        "is-top",
                        "is-bump-up",
                        "as-top"
                    ],
                    "contact": {
                        "locations": [],
                        "latitude": "13.099860410700474",
                        "longitude": "80.20353760722685",
                        "hide_map": false,
                        "zipcode": "",
                        "address": "",
                        "phone": "9094700125",
                        "whatsapp_number": "",
                        "email": "mansour@colourful.website",
                        "website": "",
                        "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                    },
                    "store": {
                        "id": 3015,
                        "title": "My Store"
                    }
                }
    
            
    ]}

    const itemDetails = {
        "listing_id": 4484,
        "author_id": 1,
        "title": "Hello car nice car",
        "pricing_type": "price",
        "price": "1,900",
        "max_price": "0",
        "price_type": "fixed",
        "price_units": [],
        "price_unit": "",
        "categories": [
            {
                "term_id": 146,
                "name": "Cars",
                "slug": "cars",
                "term_group": 0,
                "term_taxonomy_id": 146,
                "taxonomy": "rtcl_category",
                "description": "",
                "parent": 62,
                "count": 11,
                "filter": "raw"
            }
        ],
        "ad_type": "sell",
        "status": "publish",
        "images": [
            {
                "ID": 4485,
                "title": "2-4-1",
                "caption": "",
                "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg",
                "alt": "",
                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-631x493.jpg",
                "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-631x493.jpg 631w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-300x234.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-768x600.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-15x12.jpg 15w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-180x140.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg 1024w",
                "sizes": {
                    "full": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1.jpg",
                        "width": 1024,
                        "height": 800
                    },
                    "medium": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-300x234.jpg",
                        "width": 300,
                        "height": 234
                    },
                    "thumbnail": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/2-4-1-150x150.jpg",
                        "width": 150,
                        "height": 150
                    }
                },
                "src_w": 631,
                "src_h": 493,
                "srcset_sizes": "(max-width: 631px) 100vw, 631px"
            },
            {
                "ID": 4600,
                "title": "Screenshot-2022-12-14-at-6.34.20-PM",
                "caption": "",
                "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM.png",
                "alt": "",
                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-870x404.png",
                "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-870x404.png 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-300x139.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-1024x475.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-768x356.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-1536x713.png 1536w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-2048x950.png 2048w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-18x8.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-180x84.png 180w",
                "sizes": {
                    "full": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM.png",
                        "width": 2052,
                        "height": 952
                    },
                    "medium": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-300x139.png",
                        "width": 300,
                        "height": 139
                    },
                    "thumbnail": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-12-14-at-6.34.20-PM-150x150.png",
                        "width": 150,
                        "height": 150
                    }
                },
                "src_w": 870,
                "src_h": 404,
                "srcset_sizes": "(max-width: 870px) 100vw, 870px"
            },
            {
                "ID": 4601,
                "title": "Screenshot-2022-11-16-at-7.03.33-PM",
                "caption": "",
                "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png",
                "alt": "",
                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-870x289.png",
                "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-870x289.png 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-300x100.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-1024x341.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-768x255.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-1536x511.png 1536w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-18x6.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-180x60.png 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png 2026w",
                "sizes": {
                    "full": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM.png",
                        "width": 2026,
                        "height": 674
                    },
                    "medium": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-300x100.png",
                        "width": 300,
                        "height": 100
                    },
                    "thumbnail": {
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-16-at-7.03.33-PM-150x150.png",
                        "width": 150,
                        "height": 150
                    }
                },
                "src_w": 870,
                "src_h": 289,
                "srcset_sizes": "(max-width: 870px) 100vw, 870px"
            }
        ],
        "created_at": "2022-12-12 13:36:56",
        "created_at_gmt": "2022-12-12 13:36:56",
        "view_count": 17,
        "promotions": [],
        "badges": [
            "is-new",
            "is-sell"
        ],
        "contact": {
            "locations": [],
            "latitude": "13.07829272527648",
            "longitude": "80.25242491977681",
            "hide_map": false,
            "zipcode": "",
            "address": "",
            "phone": "9906417200",
            "whatsapp_number": "",
            "email": "mansour@colourful.website",
            "website": "",
            "geo_address": "CMWSSB Division 104, Ward 104, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
        },
        "store": {
            "id": 3015,
            "title": "My Store"
        },
        "url": "https://backend.colourful.work/listing/hello-car-nice-car/",
        "description": "description",
        "video_urls": [],
        "author": {
            "first_name": "Mansour",
            "last_name": "M",
            "description": "",
            "id": 1,
            "isAdmin": true,
            "email": "mansour@colourful.website",
            "username": "admin",
            "phone": "+919094799125",
            "whatsapp_number": "+919094799125",
            "website": "",
            "locations": [],
            "zipcode": "",
            "address": "",
            "latitude": "13.099860410700474",
            "longitude": "80.20353760722685",
            "pp_thumb_url": "https://gravatar.com/avatar/c6371b8911a61765da03e51cb97ad98f?s=80&d=mm",
            "membership": {
                "is_expired": false,
                "expired_at": "9999-12-04 00:00:00",
                "remaining_ads": "52",
                "posted_ads": "3",
                "promotions": []
            },
            "store": true
        },
        "custom_fields": [
            {
                "id": 4761,
                "meta_key": "_field_4761",
                "label": "Model",
                "slug": "model",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "select",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "alfa-romeo",
                "options": {
                    "default": null,
                    "choices": [
                        {
                            "id": "alfa-romeo",
                            "name": "Alfa Romeo"
                        },
                        {
                            "id": "audi",
                            "name": "Audi"
                        },
                        {
                            "id": "bmw",
                            "name": "Bmw"
                        },
                        {
                            "id": "buick",
                            "name": "Buick"
                        },
                        {
                            "id": "cadillac",
                            "name": "Cadillac"
                        },
                        {
                            "id": "changan",
                            "name": "Changan"
                        },
                        {
                            "id": "chery",
                            "name": "Chery"
                        },
                        {
                            "id": "chevrolet",
                            "name": "Chevrolet"
                        },
                        {
                            "id": "chrysler",
                            "name": "Chrysler"
                        },
                        {
                            "id": "citroen",
                            "name": "Citroen"
                        },
                        {
                            "id": "daewoo",
                            "name": "Daewoo"
                        },
                        {
                            "id": "daihatsu",
                            "name": "Daihatsu"
                        },
                        {
                            "id": "datsun",
                            "name": "Datsun"
                        },
                        {
                            "id": "ferrari",
                            "name": "Ferrari"
                        },
                        {
                            "id": "dodge",
                            "name": "Dodge"
                        },
                        {
                            "id": "fiat",
                            "name": "Fiat"
                        }
                    ]
                }
            },
            {
                "id": 4804,
                "meta_key": "_field_4804",
                "label": "Kilometers Run",
                "slug": "kilometers-run",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "number",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "1234",
                "min": "",
                "max": "",
                "step_size": "1"
            },
            {
                "id": 4805,
                "meta_key": "_field_4805",
                "label": "Trim",
                "slug": "trim",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "2.5"
            },
            {
                "id": 4806,
                "meta_key": "_field_4806",
                "label": "Regional Specs",
                "slug": "regional-specs",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "SSG"
            },
            {
                "id": 4807,
                "meta_key": "_field_4807",
                "label": "Color",
                "slug": "color",
                "description": "",
                "searchable": "",
                "listable": "",
                "type": "text",
                "icon": "",
                "required": false,
                "placeholder": "",
                "value": "Black"
            }
        ],
        "related": [
            {
                "listing_id": 4821,
                "author_id": 1,
                "title": "Car 2",
                "pricing_type": "price",
                "price": "98,763",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4822,
                        "title": "image-1-1",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png 155w, https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-9x12.png 9w, https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-108x140.png 108w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                                "width": 155,
                                "height": 201
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1.png",
                                "width": 155,
                                "height": 201
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2023/04/image-1-1-150x150.png",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 155,
                        "src_h": 201,
                        "srcset_sizes": "(max-width: 155px) 100vw, 155px"
                    }
                ],
                "created_at": "2023-04-26 12:53:59",
                "created_at_gmt": "2023-04-26 12:53:59",
                "view_count": 4,
                "promotions": [
                    "featured",
                    "_top"
                ],
                "badges": [
                    "is-featured",
                    "is-new",
                    "is-sell",
                    "is-top"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "13.099860410700474",
                    "longitude": "80.20353760722685",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "+919094799125",
                    "whatsapp_number": "",
                    "email": "mansour@colourful.website",
                    "website": "",
                    "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                },
                "store": {
                    "id": 3015,
                    "title": "My Store"
                }
            },
            {
                "listing_id": 4809,
                "author_id": 1,
                "title": "Tata Nano",
                "pricing_type": "price",
                "price": "12,300",
                "max_price": "0",
                "price_type": "negotiable",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4810,
                        "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-657x493.png",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-657x493.png 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-1024x768.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-768x576.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-16x12.png 16w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-180x135.png 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png 1242w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM.png",
                                "width": 1242,
                                "height": 932
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-300x225.png",
                                "width": 300,
                                "height": 225
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/Screenshot-2022-11-17-at-7.48.46-PM-150x150.png",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 657,
                        "src_h": 493,
                        "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                    }
                ],
                "created_at": "2022-12-16 14:30:33",
                "created_at_gmt": "2022-12-16 14:30:33",
                "view_count": 10,
                "promotions": [
                    "featured",
                    "_top",
                    "_bump_up"
                ],
                "badges": [
                    "is-featured",
                    "is-new",
                    "is-sell",
                    "is-top",
                    "is-bump-up"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "13.099860410700474",
                    "longitude": "80.20353760722685",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "9094700125",
                    "whatsapp_number": "",
                    "email": "mansour@colourful.website",
                    "website": "",
                    "geo_address": "5th Street, CMWSSB Division 100, Ward 100, Zone 8 Anna Nagar, Chennai, Chennai District, Tamil Nadu, 600001, India"
                },
                "store": {
                    "id": 3015,
                    "title": "My Store"
                }
            },
            {
                "listing_id": 4509,
                "author_id": 5,
                "title": "corporate test",
                "pricing_type": "price",
                "price": "29,021",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4510,
                        "title": "211427226_332751175072695_1839557478543784971_n",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-870x489.jpg",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-870x489.jpg 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-18x10.jpg 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-180x101.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg 960w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n.jpg",
                                "width": 960,
                                "height": 540
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-300x169.jpg",
                                "width": 300,
                                "height": 169
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/12/211427226_332751175072695_1839557478543784971_n-150x150.jpg",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 870,
                        "src_h": 489,
                        "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                    }
                ],
                "created_at": "2022-12-14 10:50:36",
                "created_at_gmt": "2022-12-14 10:50:36",
                "view_count": 6,
                "promotions": [],
                "badges": [
                    "is-new",
                    "is-sell"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "",
                    "longitude": "",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "990900999",
                    "whatsapp_number": "",
                    "email": "corporate@colourful.works",
                    "website": "",
                    "geo_address": ""
                }
            },
            {
                "listing_id": 4271,
                "author_id": 4,
                "title": "Honda car sale",
                "pricing_type": "price",
                "price": "40,000",
                "max_price": "0",
                "price_type": "fixed",
                "price_units": [],
                "price_unit": "",
                "categories": [
                    {
                        "term_id": 146,
                        "name": "Cars",
                        "slug": "cars",
                        "term_group": 0,
                        "term_taxonomy_id": 146,
                        "taxonomy": "rtcl_category",
                        "description": "",
                        "parent": 62,
                        "count": 11,
                        "filter": "raw"
                    }
                ],
                "ad_type": "sell",
                "status": "publish",
                "images": [
                    {
                        "ID": 4272,
                        "title": "DG1",
                        "caption": "",
                        "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg",
                        "alt": "",
                        "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-775x493.jpg",
                        "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-775x493.jpg 775w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-300x191.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-768x489.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-18x12.jpg 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-180x115.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg 1006w",
                        "sizes": {
                            "full": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1.jpg",
                                "width": 1006,
                                "height": 640
                            },
                            "medium": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-300x191.jpg",
                                "width": 300,
                                "height": 191
                            },
                            "thumbnail": {
                                "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/11/DG1-150x150.jpg",
                                "width": 150,
                                "height": 150
                            }
                        },
                        "src_w": 775,
                        "src_h": 493,
                        "srcset_sizes": "(max-width: 775px) 100vw, 775px"
                    }
                ],
                "created_at": "2022-11-12 12:32:57",
                "created_at_gmt": "2022-11-12 12:32:57",
                "view_count": 10,
                "promotions": [],
                "badges": [
                    "is-sell"
                ],
                "contact": {
                    "locations": [],
                    "latitude": "",
                    "longitude": "",
                    "hide_map": false,
                    "zipcode": "",
                    "address": "",
                    "phone": "971504665019",
                    "whatsapp_number": "971504665019",
                    "email": "kmddeen@gmail.com",
                    "website": "",
                    "geo_address": "Discovery Garden"
                },
                "store": {
                    "id": 1173,
                    "title": "Buynzell"
                }
            }
        ],
        "review": {
            "rating": {
                "average": "0",
                "count": 0
            }
        }
    }
    const [listItemsDetails, setListItemDetails] = useState<any>(initialListItemDetails)

    // const dateFormat = differenceInDays(new Date(initialListItemDetails.created_at))
    // console.log(dateFormat)

    const currentDate = new Date()
    const userDate = new Date(itemDetails.created_at)

    const daysOld = differenceInDays(currentDate, userDate)

    const monthsOld = Number((daysOld / 30.5).toFixed(0))
    console.log(monthsOld)


    const data = [
        {
            url:
                "https://images.unsplash.com/photo-1677144677444-9ab5de19143f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
           id:1
        },
        {
            url:
                "https://images.unsplash.com/photo-1664957968644-72602cbd9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXBob25lJTIwMTQlMjBwcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
            id:2,
        },
        {
            url:
                "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-hero-220907.jpg.og.jpg?202305110134",
            id:3,
        },
        {
            url:'https://images.unsplash.com/photo-1664478711535-fd3cc5d1a99a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlwaG9uZSUyMDE0JTIwcHJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            id:4
        }

    ]

   

    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" >
            Home
        </Link>,
        <Typography key="3" color="text.primary">
            Motor's
        </Typography>,
    ];

    const [activeSimilarItemsSearchId, setActiveSimilarItemsSearchId] = useState<number>(0)
    const onClickSimilarFilterButton = (id) => {
        setActiveSimilarItemsSearchId(id)
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const Faviourites: any = useSelector((state) => state)

    // const isItemIsAvailableInFav = Faviourites.some((each) => each.listing_id === ElectronicsListItemDetails.data.map((eachItem) => eachItem.listing_id))




    // const onClickSaveOrRemoveToFaviourate = (eachData) => {
    //     if (isItemIsAvailableInFav) {
    //         dispatch({ type: 'RemoveFav', payload: eachData.listing_id })
    //     } else {
    //         dispatch({
    //             type: 'AddToList',
    //             payload: eachData
    //         })
    //     }
    // }

    const OnClickEachItem = (eachData) => {

        console.log(eachData.categories.map((each) => each.name))
        if (eachData.categories.map((each) => each.name === 'Cars')[0]) {
            window.scrollTo(0, 0)
            navigate('/MotorsListItemDetails/:id')
        }
        else if (eachData.categories.map((each) => each.name === 'Electronicd')[0]) {
            window.scrollTo(0, 0)
            navigate('/ElectronicsListItemDetails')
        }
        else if (eachData.categories.map((each) => each.name === 'Property')[0]) {
            window.scrollTo(0, 0)
            navigate('/PropertyListItemDetails')
        }

    }


    //   useEffect(()=>{
    //     const {match} = props
    //     const {params} = match
    //     const {id} = params   
    //     const ListsUrl = `https://backend.colourful.work/wp-json/rtcl/v1/listings/${id}`
    //     const options = { 
    //         method: 'GET',          
    //         headers: {
    //           'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',           
    //           'Content-type': 'application/json',
    //           //Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODA1MDE1OTcsImV4cCI6MTY4MDU4Nzk5N30.ECp-yIUGci1ii_XGwNotRih88wl5sWv7gT8ebARXX50',
    //           'x-api-key' :'82aea282-ba7a-42d4-8aae-e387ea74e38b'
    //         }, 
    //       }
    //     fetch(ListsUrl,options)
    //     .then((res => res.json()))
    //     .then((data) =>{
    //         console.log(data)
    //         //setListItemDetails(data)
    //     })
    // })




    return (
        <>
            <HeadSection />
            <div className="electronics-item-details-main-container">
                <div className="electronics-item-details-inner-container">
                    <div className="electronics-item-details-bread-crumbs">
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                    </div>
                    <div className="ads-electronics-item-overall-container">
                        <div className="main-electronics-item-container">
                            <div className="electronics-item-title-container">
                                <h2 className="electronics-item-title">iPhone 14 Pro | Deep Purple</h2>
                            </div>  
                            <div className="electronics-carousel-container">                                        
                            <ElectricImageCarousel images={data} />   
                            </div>                                     
                            <div className="electronics-heighlights-container">
                                <div className="heighlights-heading-container">
                                    <h3 className="electronics-heighlights-heading">Highlights</h3>
                                </div>
                                <div className="electronic-detail">
                                    <div className="users-details-container">
                                        <div className="avatar-icon-container">
                                            <AiOutlineUser className="user-icon" />
                                        </div>
                                        <h4 className="users-type-heading">Single User</h4>
                                    </div>
                                    <div className="damage-details-container">
                                        <div className="damage-avatar-icon-container">
                                            <SlWrench className="user-icon" />
                                        </div>
                                        <h4 className="users-type-heading">No Damage</h4>
                                    </div>
                                    <div className="insurence-details-container">
                                        <div className="insurence-avatar-container">
                                            <RiShieldCheckLine className="user-icon" />
                                        </div>
                                        <h4 className="users-type-heading">Warrenty Available</h4>
                                    </div>
                                </div>                                
                            </div>
                            <div className="electronics-specifications-info-container">
                                <div className="ads-electronics-item-specifications-title-container">
                                    <h3 className="ads-electronics-item-specifications-title">Specifications</h3>
                                </div>
                                <div className="electronics-specifications">
                                    <div className="car-specifications-container1">
                                        <p className="specification-category-heading">Model</p>
                                        <h4 className="specification-category-value">iphone 13 pro</h4>
                                    </div>
                                    <div className="car-specifications-container2">
                                        <p className="specification-category-heading">Age</p>
                                        <h4 className="specification-category-value">1 year</h4>
                                    </div>
                                    <div className="car-specifications-container3">
                                        <p className="specification-category-heading">Memory</p>
                                        <h4 className="specification-category-value">128 GB</h4>
                                    </div>
                                </div>
                                <div className="electronics-specifications1">
                                    <div className="car-specifications-container1">
                                        <p className="specification-category-heading">Box Available</p>
                                        <h4 className="specification-category-value">Yes</h4>
                                    </div>
                                    <div className="car-specifications-container2">
                                        <p className="specification-category-heading">Includes</p>
                                        <h4 className="specification-category-value">Charger, Backcase</h4>
                                    </div>
                                    {/* <div className="car-specifications-container3">
                                        <p className="specification-category-heading">Doors</p>
                                        <h4 className="specification-category-value">4 doors</h4>
                                    </div> */}
                                </div>                   
                                
                            </div>
                            <div className="ad-item-descrition-container">
                                <h4>Description</h4>
                            </div>
                            <p className="ads-item-paragraph">Good condition with warranty available</p>
                            <div className="ads-item-price">
                                <p className="ads-item-price-text">AED 12345</p>
                            </div>
                            <div className="is-an-issue-report-ad-container">
                                <p className="issue-report-text">Is there an issue? Report Ad</p>
                            </div>
                        </div>
                        <div className="electronics-narrow-cotainer">
                            <div className="top-section">
                                <div className="top-section-price-text-container">
                                    <p className="top-section-price-text"> AED {itemDetails.price}</p>
                                    <p className="top-section-posted-sub-text" > Posted {monthsOld} Months ago</p>
                                </div>
                                <div className="top-section-ads-posted-user-info-container">
                                    <div className="top-section-ads-posted-user-info-inner-container">
                                        <div className="user-photo-avatar-container">
                                            {/* <img className="avatar" src='' alt="call" /> */}
                                        </div>
                                        <p className="user-name">Rasheed</p>
                                    </div>
                                </div>
                                <div className="ads-person-contact-information-details-buttons">
                                    <button type='button' className="chat-with-seller-button"><BsChatLeft />Chat with seller</button>
                                    <button type='button' className="contact-with-seller-button"><BsTelephone />8300061759</button>
                                </div>
                                <div className="ads-posted-person-adress-info-container">
                                    <p className="ads-posted-person-adress-info-heading">Posted in</p>
                                    <p className="ads-posted-person-adress-info-location-name">Zayadcity Dubai</p>
                                </div>
                                <div className="electronics-adress-location-on-map">
                                    <div id="embedded-map-display" >
                                        <iframe 
                                            style={{width:372, height:200}} 
                                            src="https://www.google.com/maps/embed/v1/place?q=Zayedcity,Dubai&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                                        </iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="electronics-ads-imag-container">
                                Ad
                            </div>
                        </div>
                    </div>                    
                </div>
                <div className="electronics-similar-item-details-container">
                        <div className="similar-item-details-heading-container">
                            <h3 className="similar-item-details-heading">Similar Items</h3>
                        </div>
                        <div className="filter-input-fields-buttons">
                            {similarfilterButtons.map((each) => (
                                <button type="button" key={each.id} onClick={() => onClickSimilarFilterButton(each.id)} className={each.id === activeSimilarItemsSearchId ? 'activeCarSimilarFilter' : 'DeactiveCarSimilarFilter'}>{each.name}</button>
                            ))}
                        </div>
                        <ul className='similar-item-details-product-list'>
                            {ElectronicsListItemDetails.data.map((each) => (
                                <li className='product-card'>
                                    <div style={{ backgroundImage: `url(${each.images.map((eachObject) => eachObject.src)[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', width: 233.6, height: 136, margin: 0, borderRadius: 4 }} key={each.listing_id} >
                                        {/* {isItemIsAvailableInFav ?
                                            (< button type="button" key={each.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(each)} className='activeLove' ><MdFavorite /></button>
                                            ) : (< button type="button" key={each.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(each)} className='deactiveLove' ><GrFavorite /></button>)
                                        } */}
                                    </div>
                                    <div key={each.listing_id} onClick={() => OnClickEachItem(each)}>
                                        <div className='detaisl-container'>
                                            <h4 className='product-price'> AED {each.price}</h4>
                                            <div className='product-title-container'>
                                                <h6 className='product-image-title'>{each.title}</h6>
                                            </div>
                                            <div className='product-location-container'>
                                                <h6 className='product-location-heading'><MdLocationPin />Location</h6>
                                            </div>
                                            <div className='chat-container'>
                                                <button type="button" className='chat-button' > <Stack><BsChatLeft className='chat-icon' /></Stack>Chat</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>        

        </>
    );
};
export default ElectronicsListItemDetails;