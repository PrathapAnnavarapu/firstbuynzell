
import React from 'react';
import {useParams} from 'react-router-dom'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom'
import HeadSection from '../HeadSection/Header'
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import ProductCard from '../LandingSection/ProductCard';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import SearchResultsFilters from './SearchResultsFilters/searchResultsFilters';
import { BsChatLeft } from "react-icons/bs";
// import { GrFavorite } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import Stack from '@mui/material/Stack'
import './searchResults.css'

const allProducts = {
    "data": [
        {
            "listing_id": 4869,
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
                    "ID": 4060,
                    "title": "Screenshot-2022-11-17-at-7.48.46-PM",
                    "caption": "",
                    "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
                    "alt": "",
                    "src": "https://imgd-ct.aeplcdn.com/664x415/ec/42/B5/18712/img/ol/Tata-Nano-GenX-Left-Front-Three-Quarter-51781.jpg?v=201711021421&q=75",
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
                    "src": ["https://imgd.aeplcdn.com/1280x720/cw/ec/25465/Hyundai-Verna-Exterior-118764.jpg?wm=0&q=75"],
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
                "is-top",
                "as-top"
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
            "listing_id": 4822,
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
                    "src": "https://imgd.aeplcdn.com/0x0/n/cw/ec/106785/exterior-right-front-three-quarter-2.jpeg?isig=0",
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
            }
        },
        {
            "listing_id": 4824,
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
                    "src": "https://upload.wikimedia.org/wikipedia/commons/3/3c/Tata_-_Nano_-_Kolkata_2011-09-15_5184.JPG",
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
            "promotions": ["featured"],
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
            "promotions": ["featured"],
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
                    "src": "https://media.istockphoto.com/id/170110046/photo/photorealistic-illustration-of-blue-car.jpg?s=612x612&w=0&k=20&c=-hoFPF15-T07bUBJn6ccsSwGw96ZObf5JEdS4Y8Co1M=",
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
        },
        {
            "listing_id": 4228,
            "author_id": 4,
            "title": "car 1",
            "pricing_type": "price",
            "price": "200",
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
            "images": ["https://imgd.aeplcdn.com/1056x594/n/eiccs0b_1641693.jpg?q=75"],
            "created_at": "2022-10-20 07:30:04",
            "created_at_gmt": "2022-10-20 07:30:04",
            "view_count": 2,
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
                "phone": "99064123344",
                "whatsapp_number": "",
                "email": "buynzell@colourful.website",
                "website": "",
                "geo_address": ""
            },
            "store": {
                "id": 1173,
                "title": "Buynzell"
            }
        },
        {
            "listing_id": 4221,
            "author_id": 1,
            "title": "Alto 800",
            "pricing_type": "price",
            "price": "125,000",
            "max_price": "0",
            "price_type": "fixed",
            "price_units": ["featured"],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 62,
                    "name": "Cars &amp; Vehicles",
                    "slug": "cars-vehicles",
                    "term_group": 0,
                    "term_taxonomy_id": 62,
                    "taxonomy": "rtcl_category",
                    "description": "Sell ​​motorbikes &amp; other vehicles New and used. Find your favorite brand from top brands including Nissan, Honda, Toyota and Suzuki.",
                    "parent": 0,
                    "count": 2,
                    "filter": "raw"
                },
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
                    "ID": 4222,
                    "title": "hqdefault",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault.jpg",
                    "alt": "",
                    "src": "https://imgd.aeplcdn.com/642x336/cw/ec/23445/Maruti-Suzuki-Alto-800-Right-Front-Three-Quarter-72869.jpg?v=201711021421&q=75",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault.jpg 480w, https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault-16x12.jpg 16w, https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault-180x135.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/hqdefault-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 480,
                    "src_h": 360,
                    "srcset_sizes": "(max-width: 480px) 100vw, 480px"
                },
                {
                    "ID": 4223,
                    "title": "maruti",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti.jpg 669w, https://backend.colourful.work/wp-content/uploads/2022/10/maruti-300x206.jpg 300w, https://backend.colourful.work/wp-content/uploads/2022/10/maruti-18x12.jpg 18w, https://backend.colourful.work/wp-content/uploads/2022/10/maruti-180x123.jpg 180w, https://backend.colourful.work/wp-content/uploads/2022/10/maruti-170x116.jpg 170w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti.jpg",
                            "width": 669,
                            "height": 459
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti-300x206.jpg",
                            "width": 300,
                            "height": 206
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/2022/10/maruti-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 669,
                    "src_h": 459,
                    "srcset_sizes": "(max-width: 669px) 100vw, 669px"
                }
            ],
            "created_at": "2022-10-19 13:24:37",
            "created_at_gmt": "2022-10-19 13:24:37",
            "view_count": 11,
            "promotions": [],
            "badges": [
                "is-sell"
            ],
            "contact": {
                "locations": [],
                "latitude": "25.07428235",
                "longitude": "55.18853865",
                "hide_map": false,
                "zipcode": "",
                "address": "",
                "phone": "9210897412",
                "whatsapp_number": "",
                "email": "najmu@colourful.website",
                "website": "",
                "geo_address": "Dubai United Arab Emirates"
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
        {
            "listing_id": 4128,
            "author_id": 1,
            "title": "Maruti 800",
            "pricing_type": "price",
            "price": "9,999",
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
                    "ID": 4129,
                    "title": "hqdefault",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault.jpg 480w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault-16x12.jpg 16w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault-180x135.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/hqdefault-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 480,
                    "src_h": 360,
                    "srcset_sizes": "(max-width: 480px) 100vw, 480px"
                },
                {
                    "ID": 4130,
                    "title": "maruti",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti.jpg 669w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-300x206.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-18x12.jpg 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-180x123.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-170x116.jpg 170w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti.jpg",
                            "width": 669,
                            "height": 459
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-300x206.jpg",
                            "width": 300,
                            "height": 206
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/maruti-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 669,
                    "src_h": 459,
                    "srcset_sizes": "(max-width: 669px) 100vw, 669px"
                }
            ],
            "created_at": "2022-10-15 06:29:53",
            "created_at_gmt": "2022-10-15 06:29:53",
            "view_count": 2,
            "promotions": ["featured"],
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
                "phone": "9210897412",
                "whatsapp_number": "",
                "email": "najmu@colourful.website",
                "website": "",
                "geo_address": ""
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
        {
            "listing_id": 4045,
            "author_id": 1,
            "title": "Cars",
            "pricing_type": "range",
            "price": "6,999",
            "max_price": "9,999",
            "price_type": "fixed",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 86,
                    "name": "Motorbikes &amp; Scooters",
                    "slug": "motorbikes-scooters",
                    "term_group": 0,
                    "term_taxonomy_id": 86,
                    "taxonomy": "rtcl_category",
                    "description": "",
                    "parent": 62,
                    "count": 1,
                    "filter": "raw"
                }
            ],
            "ad_type": "sell",
            "status": "publish",
            "images": [
                {
                    "ID": 4046,
                    "title": "kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c3575d02b76.1195684415495468698527",
                    "caption": "",
                    "url": "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
                    "alt": "",
                    "src": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "sizes": {
                        "full": {
                            "src": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                            "width": 990,
                            "height": 743
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c3575d02b76.1195684415495468698527-300x225.png",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-mercedes-benz-a-class-car-mercedes-benz-cla-class-5c5c3575d02b76.1195684415495468698527-150x150.png",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 4047,
                    "title": "kisspng-tesla-inc-car-2-18-tesla-model-s-electric-vehicl-2-13-ch-5cb671100f7688.8373580215554603680633",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-tesla-inc-car-2-18-tesla-model-s-electric-vehicl-2-13-ch-5cb671100f7688.8373580215554603680633.png",
                    "alt": "",
                    "src": "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-tesla-inc-car-2-18-tesla-model-s-electric-vehicl-2-13-ch-5cb671100f7688.8373580215554603680633.png",
                            "width": 1920,
                            "height": 1080
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-tesla-inc-car-2-18-tesla-model-s-electric-vehicl-2-13-ch-5cb671100f7688.8373580215554603680633-300x169.png",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/kisspng-tesla-inc-car-2-18-tesla-model-s-electric-vehicl-2-13-ch-5cb671100f7688.8373580215554603680633-150x150.png",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 870,
                    "src_h": 489,
                    "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                },
                {
                    "ID": 4048,
                    "title": "toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1.png",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-870x285.png",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-870x285.png 870w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-300x98.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-1024x335.png 1024w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-768x251.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-18x6.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-180x59.png 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1.png 1513w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1.png",
                            "width": 1513,
                            "height": 495
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-300x98.png",
                            "width": 300,
                            "height": 98
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/toppng.com-sports-car-luxury-vehicle-clip-art-cars-royalty-free-1513x495-1-150x150.png",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 870,
                    "src_h": 285,
                    "srcset_sizes": "(max-width: 870px) 100vw, 870px"
                },
                {
                    "ID": 4049,
                    "title": "transparent-car-image-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1.png",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1.png",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1.png 781w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-300x139.png 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-768x355.png 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-18x8.png 18w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-180x83.png 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1.png",
                            "width": 781,
                            "height": 361
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-300x139.png",
                            "width": 300,
                            "height": 139
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/10/transparent-car-image-1-150x150.png",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 781,
                    "src_h": 361,
                    "srcset_sizes": "(max-width: 781px) 100vw, 781px"
                }
            ],
            "created_at": "2022-10-08 13:52:50",
            "created_at_gmt": "2022-10-08 13:52:50",
            "view_count": 7,
            "promotions": [],
            "badges": [
                "is-sell"
            ],
            "contact": {
                "locations": [],
                "latitude": "",
                "longitude": "",
                "hide_map": true,
                "zipcode": "",
                "address": "",
                "phone": "990900990",
                "whatsapp_number": "",
                "email": "admin@buynzell.colourful.website",
                "website": "",
                "geo_address": "Dubai"
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
        {
            "listing_id": 2571,
            "author_id": 1,
            "title": "TV 75 inch Hisense Smart TV Almost New",
            "pricing_type": "price",
            "price": "1,900",
            "max_price": "0",
            "price_type": "fixed",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 119,
                    "name": "TVs",
                    "slug": "tvs",
                    "term_group": 0,
                    "term_taxonomy_id": 119,
                    "taxonomy": "rtcl_category",
                    "description": "",
                    "parent": 65,
                    "count": 2,
                    "filter": "raw"
                }
            ],
            "ad_type": "sell",
            "status": "publish",
            "images": [
                {
                    "ID": 2572,
                    "title": "image-1-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2573,
                    "title": "image-2-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2574,
                    "title": "image-3-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg 370w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg 225w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-105x140.jpg 105w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg 450w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                            "width": 450,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg",
                            "width": 225,
                            "height": 300
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 370,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 370px) 100vw, 370px"
                },
                {
                    "ID": 2575,
                    "title": "image-4",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2576,
                    "title": "image-5",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3822,
                    "title": "image-1-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3823,
                    "title": "image-1-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3824,
                    "title": "image-1-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3825,
                    "title": "image-2-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3826,
                    "title": "image-2-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3827,
                    "title": "image-2-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3828,
                    "title": "image-3-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg 370w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg 225w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-105x140.jpg 105w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg 450w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                            "width": 450,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg",
                            "width": 225,
                            "height": 300
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 370,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 370px) 100vw, 370px"
                },
                {
                    "ID": 3829,
                    "title": "image-3-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg 370w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg 225w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-105x140.jpg 105w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg 450w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                            "width": 450,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg",
                            "width": 225,
                            "height": 300
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 370,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 370px) 100vw, 370px"
                },
                {
                    "ID": 3830,
                    "title": "image-3-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-370x493.jpg 370w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg 225w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-105x140.jpg 105w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg 450w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2.jpg",
                            "width": 450,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-225x300.jpg",
                            "width": 225,
                            "height": 300
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 370,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 370px) 100vw, 370px"
                },
                {
                    "ID": 3831,
                    "title": "image-4",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3832,
                    "title": "image-4",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3833,
                    "title": "image-4",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-4-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3834,
                    "title": "image-5",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3835,
                    "title": "image-5",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3836,
                    "title": "image-5",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-5-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                }
            ],
            "created_at": "2022-09-20 10:57:04",
            "created_at_gmt": "2022-09-20 10:57:04",
            "view_count": 12,
            "promotions": [],
            "badges": [
                "is-sell"
            ],
            "contact": {
                "locations": [],
                "latitude": "25.074282349999997",
                "longitude": "55.18853865430702",
                "hide_map": false,
                "zipcode": "",
                "address": "",
                "phone": "9210897412",
                "whatsapp_number": "",
                "email": "admin@buynzell.colourful.website",
                "website": "",
                "geo_address": "Dubai United Arab Emirates"
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
        {
            "listing_id": 2545,
            "author_id": 1,
            "title": "Toyota",
            "pricing_type": "price",
            "price": "11,092",
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
                    "ID": 2546,
                    "title": "image-1-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2547,
                    "title": "image-2-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2551,
                    "title": "image-3-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 2552,
                    "title": "image-6",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3810,
                    "title": "image-1-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3811,
                    "title": "image-1-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3812,
                    "title": "image-1-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3813,
                    "title": "image-2-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3814,
                    "title": "image-2-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3815,
                    "title": "image-2-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3816,
                    "title": "image-3-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3817,
                    "title": "image-3-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3818,
                    "title": "image-3-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3819,
                    "title": "image-6",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3820,
                    "title": "image-6",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                },
                {
                    "ID": 3821,
                    "title": "image-6",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-657x493.jpg 657w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-768x576.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-180x135.jpg 180w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg 800w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6.jpg",
                            "width": 800,
                            "height": 600
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-300x225.jpg",
                            "width": 300,
                            "height": 225
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-6-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 657,
                    "src_h": 493,
                    "srcset_sizes": "(max-width: 657px) 100vw, 657px"
                }
            ],
            "created_at": "2022-09-20 10:51:49",
            "created_at_gmt": "2022-09-20 10:51:49",
            "view_count": 24,
            "promotions": [],
            "badges": [
                "is-sell",
                "is-sold"
            ],
            "contact": {
                "locations": [],
                "latitude": "25.074282349999997",
                "longitude": "55.18853865430702",
                "hide_map": false,
                "zipcode": "",
                "address": "",
                "phone": "9898767576",
                "whatsapp_number": "",
                "email": "admin@buynzell.colourful.website",
                "website": "",
                "geo_address": "Dubai United Arab Emirates"
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
        {
            "listing_id": 2499,
            "author_id": 1,
            "title": "Mercedes-Benz GLE 450 Coupe 4MATIC",
            "pricing_type": "price",
            "price": "11,091",
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
                    "ID": 2500,
                    "title": "image-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 2501,
                    "title": "image-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 2502,
                    "title": "image-3",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3798,
                    "title": "image",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3800,
                    "title": "image",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3795,
                    "title": "image-3",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3796,
                    "title": "image-3",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3797,
                    "title": "image-3",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-3-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3792,
                    "title": "image-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3793,
                    "title": "image-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3794,
                    "title": "image-2",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-2-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3789,
                    "title": "image-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3790,
                    "title": "image-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                },
                {
                    "ID": 3791,
                    "title": "image-1",
                    "caption": "",
                    "url": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "alt": "",
                    "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                    "srcset": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg 800w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg 300w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-768x432.jpg 768w, https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-180x101.jpg 180w",
                    "sizes": {
                        "full": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1.jpg",
                            "width": 800,
                            "height": 450
                        },
                        "medium": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-300x169.jpg",
                            "width": 300,
                            "height": 169
                        },
                        "thumbnail": {
                            "src": "https://backend.colourful.work/wp-content/uploads/classified-listing/2022/09/image-1-150x150.jpg",
                            "width": 150,
                            "height": 150
                        }
                    },
                    "src_w": 800,
                    "src_h": 450,
                    "srcset_sizes": "(max-width: 800px) 100vw, 800px"
                }
            ],
            "created_at": "2022-09-20 10:21:30",
            "created_at_gmt": "2022-09-20 10:21:30",
            "view_count": 20,
            "promotions": [],
            "badges": [
                "is-sell"
            ],
            "contact": {
                "locations": [],
                "latitude": "25.2311534",
                "longitude": "54.21900831355923",
                "hide_map": false,
                "zipcode": "",
                "address": "",
                "phone": "9906417289",
                "whatsapp_number": "",
                "email": "",
                "website": "",
                "geo_address": "Sharjah Emirate United Arab Emirates"
            },
            "store": {
                "id": 3015,
                "title": "My Store"
            }
        },
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
            },
        },
        {
            "listing_id": 1809,
            "author_id": 1,
            "title": "2KhK Appartment",
            "pricing_type": "price",
            "price": "12,300",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://media.designcafe.com/wp-content/uploads/2020/09/25151904/2bhk-apartment-living-room-interior-design.jpg",
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
            "listing_id": 1812,
            "author_id": 1,
            "title": "3HK Individual House",
            "pricing_type": "price",
            "price": "8,300",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://mediacdn.99acres.com/media1/20965/14/419314322M-1682162730886.jpg",
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
            "listing_id": 1813,
            "author_id": 1,
            "title": "Villa house",
            "pricing_type": "price",
            "price": "8,300",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://sulcdn.azureedge.net/property/realestatead/9600/full/2022_04_21_08_28_06_716_72.jpeg",
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
            "listing_id": 1814,
            "author_id": 1,
            "title": "10 Acres Farming Land",
            "pricing_type": "price",
            "price": "14,300",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://thumbs.dreamstime.com/b/vivid-farmland-18901726.jpg",
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
            "listing_id": 1815,
            "author_id": 1,
            "title": "1 BHK House",
            "pricing_type": "price",
            "price": "16,200",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://3.bp.blogspot.com/-b08asni06gQ/Ww9E71ZvWvI/AAAAAAABLoc/CV5F7NAwFB8ZP4ROUVFs20j0H4fEe2Z0wCLcBGAs/s1600/north-indian-home-design.jpg",
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
            "listing_id": 1816,
            "author_id": 1,
            "title": "3 BHK Appartment",
            "pricing_type": "price",
            "price": "2,200",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://is1-3.housingcdn.com/4f2250e8/1367c7c6789edaeb4c9a9901b9caa47a/v0/fs-large/kaaviya_anugrahaa-anna_nagar_chennai-chennai-kaaviya_properties_pvt_ltd.jpeg.webp",
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
            "listing_id": 1817,
            "author_id": 1,
            "title": "6 cents House Land",
            "pricing_type": "price",
            "price": "19,270",
            "max_price": "0",
            "price_type": "negotiable",
            "price_units": [],
            "price_unit": "",
            "categories": [
                {
                    "term_id": 146,
                    "name": "Property",
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
                    "src": "https://img.freepik.com/free-photo/beautiful-landscape-with-clear-sky_23-2149721820.jpg?w=826&t=st=1684838176~exp=1684838776~hmac=bad2fe7561cf1391947f2d82dd3575e981359f104d3c20e67ee5960ea8770e8e",
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
    ],
    "pagination": {
        "total": 13,
        "count": 13,
        "per_page": 20,
        "current_page": 1,
        "total_pages": 1
    }

}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 1, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}





const  CustomizedDialogs = ()  =>{
    const navigate = useNavigate()
    const searchInputObject = useParams()
    
    
    const [open, setOpen] = React.useState(false);
    const [allSearchProducts, setAllSearchProducts] = React.useState<any>(allProducts)

    
    console.log(searchInputObject.searchInput)



    const filterResults = allSearchProducts.data.filter((each) => each.title.toLowerCase().includes(searchInputObject.searchInput.toLowerCase()))
    
    console.log(filterResults)
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const statesOfUAE = [
        { label: 'Dubai', id: 1 },
        { label: 'Abu Dhabi', id: 2 },
        { label: 'Ras al Khaimah', id: 3 },
        { label: 'Sharjah', id: 4 },
        { label: 'Fujairah', id: 5 },
        { label: "Ajman", id: 6 },
        { label: 'Umm al Quwain', id: 7 },
        {
            label: 'Others',
            id: 8,
        }
    ]

    const eleList = [
        { label: 'Mobiles', id: 1 },
        { label: 'Watch', id: 2 },
        { label: 'Laptops', id: 3 },
        { label: 'Accessorys', id: 4 },
        { label: 'Charger', id: 5 },
        { label: "Spare Parts", id: 6 }
    ]

    const sort = [
        { label: 'Price Low- High', id: 1 },
        { label: 'Price High-Low', id: 2 }
    ]

    const handleClick = () =>{
        navigate('/')
    }

    const breadcrumbs = [
        <Link  key="1" color="inherit" href='' onClick={handleClick}>
            Home
        </Link>,
         <Typography key="2" color="text.primary">
        {searchInputObject.searchInput}
       </Typography>

    ];



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



    return (
        <>
            <HeadSection />
            <div className='outer-user-search-results-container'>
                <div className='search-result-ad-container'>
                    ad
                </div>
                <div className='search-results-bread-crumbs-container'>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="small" />}
                            aria-label="breadcrumb"
                        >
                            {breadcrumbs}
                        </Breadcrumbs>
                </div>
                <div id='user-entered-search-results-container'>
                    <div className='search-results-along-with-description'>
                        <p className='user-search-results-sub-heading'>We found {filterResults.length} Ads for <span className='bold-search'>"{searchInputObject.searchInput}"</span></p>
                        <div className='se'>Search</div>
                        <div className='filter-container'>
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={statesOfUAE}
                                sx={{ width: 200, m: 1 }}                                
                                renderInput={(params) => <TextField {...params} placeholder="Dubai" />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={eleList}
                                sx={{ width: 200, m: 1 }}
                                renderInput={(params) => <TextField {...params} placeholder="Electronics" />}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={eleList}
                                sx={{ width: 200, m: 1 }}
                                renderInput={(params) => <TextField {...params} placeholder="Mobile" />}
                            />
                            <TextField
                                id="filled-search"
                                placeholder="Search field"
                                type="search"
                                variant="filled"
                                sx={{ width: 200, m: 1 }}
                            />
                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={sort}
                                sx={{ width: 200, m: 1 }}
                                renderInput={(params) => <TextField {...params} placeholder="Sort" />}
                            />
                            <div>
                                <Button variant="outlined" onClick={handleClickOpen} sx={{ width: 200, m: 1, height: 56 }}>
                                    Filters
                                </Button>
                                <BootstrapDialog
                                    onClose={handleClose}
                                    aria-labelledby="customized-dialog-title"
                                    open={open}
                                >
                                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} >
                                        Filters
                                    </BootstrapDialogTitle>
                                    <SearchResultsFilters />
                                </BootstrapDialog>
                            </div>
                        </div>
                    </div>
                    <ul className='unordered-user-search-results'>
                        {filterResults.map((eachProduct) =>
                            <li className='product-card'>
                                <div style={{ backgroundImage: `url(${eachProduct.images.map((eachObject) => eachObject.src)[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', width: 233.6, height: 136, margin: 0, borderRadius: 4 }} key={eachProduct.listing_id} >
                                    {/* {isItemIsAvailableInFav ?
                                    (< button type="button" key={eachProduct.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(eachData)} className='activeLove' ><MdFavorite /></button>
                                    ) : (< button type="button" key={eachProduct.listing_id} onClick={() => onClickSaveOrRemoveToFaviourate(eachData)} className='deactiveLove' ><GrFavorite /></button>)
                                }                    */}
                                </div>
                                <div key={eachProduct.listing_id} onClick={() => OnClickEachItem(eachProduct)}>
                                    <div className='detaisl-container'>
                                        <h4 className='product-price'> AED {eachProduct.price}</h4>
                                        <div className='product-title-container'>
                                            <h6 className='product-image-title'>{eachProduct.title}</h6>
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
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}
export default CustomizedDialogs



