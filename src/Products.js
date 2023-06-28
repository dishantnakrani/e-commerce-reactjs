import * as React from 'react';
import { useState, useEffect } from 'react';
import './product.css';
import Layout from './Layout'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 200;

const cateGender = [
    'Jerseys',
    'merchandise',
    'Gears'
];



let productData = [
    {
        id: 1,
        products: "chennai super king jercey",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796157/cricify/ipl/csk-match-jersey-2023-dhoni-1599-back-front_am88y0.jpg",
        Men: "Yes",
        Women: "No",
        Ipl: "Yes",
        Wpl: "No",
        International: "No",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 5,
        discountprice: 1602,
        mrp: 1790,



    },
    {
        id: 2,
        products: "Colcata night riders pass",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/Kolkata_Knight_Riders_-_Luggage_Bag_Tags_Pack_of_-_1_-231_ymfjeh.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "No",
        International: "no",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: 3.3,
        discountprice: 208,
        mrp: 231,

    },
    {
        id: 3,
        products: "India 2003-06 jercey ",
        Men: "Yes",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685866681/cricify/ind-2003-2006-jersey-1999_fbbma3.jpg",
        Men: "Yes",
        Women: "no",
        Ipl: "no",
        Wpl: "No",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 4.1,
        discountprice: 1889,
        mrp: 2099,

    }
    , {
        id: 4,
        products: "India 2003-06 jercey ",
        Men: "yes",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796122/cricify/fan-merchandise/Sports_Gym_Bag_CSK-1699_pocypb.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "No",
        International: "no",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: 4.1,
        discountprice: 1529,
        mrp: 1699,

    },
    {
        id: 5,
        products: "WOMEN BLUE WHITE MI - OFFICIAL SLIDER FLIP FLOPS ",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796122/cricify/fan-merchandise/Women_s_Blue_White_Mi-_Official_Slider_Flip_Flops-999_hpkbd8.jpg",
        Men: "no",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "no",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: 5,
        discountprice: 899,
        mrp: 999,
    },
    {
        id: 6,
        products: "WOMEN BLUE WHITE MI - OFFICIAL SLIDER FLIP FLOPS ",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/Chennai_Super_Kings_-_Yellove_Sipper-799_cmknc8.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "1 Litter",
        Category: "merchandise",
        Rating: 3.8,
        discountprice: 719,
        mrp: 999,
    },
    {
        id: 7,
        products: "sg Full cricket kit combo ",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796138/cricify/accessories/SG_Full_Cricket_Kit_Combo_awljtl.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "1 Litter",
        Category: "Jersey",
        Rating: 4.8,
        discountprice: 24499,
        mrp: 29999,
    },
    {
        id: 8,
        products: "royal challenge banglore (rcb) jercey ",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796160/cricify/ipl/rcb-match-jersey-2023-virat-1299-back-front_k19wao.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "",
        Category: "gears",
        Rating: 4.8,
        discountprice: 1499,
        mrp: 1599,
    },
    {
        id: 9,
        products: "gujarat titan jerceys (gt training jacket)",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/GT-Training_Jacket-1799_rbbdcp.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 4.8,
        discountprice: 1299,
        mrp: 1399,
    },
    {
        id: 10,
        products: "gujarat titan jerceys (gt training jacket)",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796122/cricify/fan-merchandise/LSG_The_Super_Giants_-_Square_Pillows-399_ur12ps.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: 4.8,
        discountprice: 299,
        mrp: 399,
    },
    {
        id: 11,
        products: "INDIA 2022-23 JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685866681/cricify/ind-jersey-22-23-front-back-2499_h3vpla.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "no",
        Wpl: "no",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 4.1,
        discountprice: 2199,
        mrp: 2499,
    },
    {
        id: 12,
        products: "MI-OFFICIAL NEW ERA 9FIFTY CAP-NAVY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796122/cricify/fan-merchandise/MI-Official_New_Era_9Fifty_Cap-Navy-1699_lv6uac.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: 4.1,
        discountprice: 2199,
        mrp: 2499,
    },
    {
        id: 13,
        products: "INDIA 1985 FAN JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685866681/cricify/ind-1985-fan-jersey-1399_fbtvlz.png",
        Men: "yes",
        Women: "no",
        Ipl: "no",
        Wpl: "no",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 3.1,
        discountprice: 1259,
        mrp: 1399,
    },
    {
        id: 14,
        products: "SS Ton Reserve Edition English Willow Short Handle Cricket BatSS Ton Reserve Edition English Willow Short Handle Cricket Bat",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685940029/cricify/accessories/SS_Ton_Reserve_Edition_English_Willow_Short_Handle_Cricket_Bat-39999_kb0hwe.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Gears",
        Rating: 4.8,
        discountprice: 35999,
        mrp: 39999,
    },
    {
        id: 15,
        products: "INDIA 2007 T20 WC JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685866680/cricify/ind-2007-t20-wc-jersey-2099_aowuv3.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "no",
        Wpl: "no",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 4.9,
        discountprice: 3599,
        mrp: 4999,
    },
    {
        id: 16,
        products: "DSC CONDOR ATMOS LEATHER CRICKET BATTING GLOVES",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796136/cricify/accessories/DSC_Condor_Atmos_Leather_Cricket_Batting_Gloves-910_ighvtk.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Gears",
        Rating: "1.9",
        discountprice: 259,
        mrp: 459,
    },
    {
        id: 17,
        products: "INDIA 2011 WC JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685866680/cricify/ind-2011-wc-jersey-3999_uvi2gc.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "no",
        Wpl: "no",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: 5,
        discountprice: 259,
        mrp: 459,
    }, {
        id: 18,
        products: "LSG GAZAB ANDAZ - FRIDGE MAGNETS",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796122/cricify/fan-merchandise/LSG_Gazab_Andaz_-_Fridge_Magnets-199_k2ef0r.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "1.9",
        discountprice: 179,
        mrp: 299,
    }, {
        id: 19,
        products: "RAJASTHAN ROYALS(RR) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796160/cricify/ipl/rr-match-jersey-2023-sanju-1092-back-front_lxx2gp.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "1.9",
        discountprice: 999,
        mrp: 1999,
    }, {
        id: 20,
        products: "ICC T20 BLACK BACKPACK",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/icc-t20-black-backpack-715_ki5orc.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "no",
        Wpl: "no",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "3.9",
        discountprice: 644,
        mrp: 799,
    }, {
        id: 21,
        products: "INDIA BLUE BLACK STRING BAG",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/india-unisex-blue-black-string-bag-379_v4h21n.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "4.2",
        discountprice: 299,
        mrp: 499,
    }, {
        id: 22,
        products: "SUNRISERS HYDERABAD(SRH) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796161/cricify/ipl/srh-match-jersey-2023-599-back-front_nymjz3.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: "1.9",
        discountprice: 539,
        mrp: 599,
    }, {
        id: 23,
        products: "PUNJAB KINGS(PK) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796160/cricify/ipl/punjab-match-jersey-2023-zinta-799-back-front_ckph5r.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: "1.9",
        discountprice: 1184,
        mrp: 1316,
    }, {
        id: 24,
        products: "SUNRISERS HYDERABAD - ACRYLIC KEYCHAINS PACK OF - 2",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/Sunrisers_Hyderabad_-_Acrylic_Keychains_Pack_of_-_2_-182_wvz5tk.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Gears    ",
        Rating: "1.9",
        discountprice: 259,
        mrp: 459,
    }, {
        id: 25,
        products: "RAJASTHAN ROYALS - TOTE BAGS PACK OF - 1",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/Rajasthan_Royals_-_Tote_Bags_Pack_of_-_1_-239_iliqat.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "merchandise",
        Rating: "1.9",
        discountprice: 259,
        mrp: 459,
    },
    {
        id: 25,
        products: "KOLKATA KNIGHT RIDERS(KKR) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796158/cricify/ipl/kkr-match-jersey-2023-1304-back-front_fblla1.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: "1.9",
        discountprice: 1259,
        mrp: 1459,
    }, {
        id: 26,
        products: "LUCKNOW SUPER GIANTS(LSG) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796159/cricify/ipl/lsg-match-jersey-2023-rahul-899-back-front_ounxgx.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Jerseys",
        Rating: "1.9",
        discountprice: 259,
        mrp: 459,
    }, {
        id: 27,
        products: "CHENNAI SUPER KINGS - THALA 7 CERAMIC MUG",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796121/cricify/fan-merchandise/Chennai_Super_Kings_-_Thala_7_Ceramic_Mug-399_w3juus.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "1.9",
        discountprice: 339,
        mrp: 499,
    },
    {
        id: 28,
        products: "MUMBAI INDIANS(MI) JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796160/cricify/ipl/mi-match-jersey-2023-rohit-1099-back-front_lxiqid.jpg",
        Men: "yes",
        Women: "no",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jersey",
        Rating: "1.9",
        discountprice: 1599,
        mrp: 1899,
    }, {
        id: 29,
        products: "SG OPTIPRO CRICKET HELMET",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796137/cricify/accessories/SG_Optipro_Cricket_Helmet-2005_pxjprt.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "no",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Gears",
        Rating: "4.5",
        discountprice: 499,
        mrp: 999,
    }, {
        id: 30,
        products: "KOOKABURRA ADULT CRICKET BAT KB KAHUNA 1000",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796136/cricify/accessories/KOOKABURRA_Adult_Cricket_Bat_KB_Kahuna_1000-41142_dejeaj.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Gears",
        Rating: "1.9",
        discountprice: 33999,
        mrp: 39999,
    },
    {
        id: 31,
        products: "SG TEST LEATHER CRICKET BALL RED",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796137/cricify/accessories/SG_test_cricket_leather_ball-red-1799_m1q2w3.jpg",
        Men: "yes",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "yes",
        Size: "One Size-Free Size",
        Category: "Gears",
        Rating: "4.2",
        discountprice: 3499,
        mrp: 3599,
    }, {
        id: 32,
        products: "GUJARAT GIANTS(GG) WOMEN JERSEY",
        thumbnail: "https://res.cloudinary.com/dbe8yf165/image/upload/v1685796147/cricify/wpl/gg-women-match-jersey-2023-999-front_sfprmj.jpg",
        Men: "no",
        Women: "yes",
        Ipl: "yes",
        Wpl: "no",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Merchandise",
        Rating: "1.9",
        discountprice: 33999,
        mrp: 39999,
    },
    {
        id: 33,
        products: "Royal Challengers Bangalore 2023 Women's Replica Jersey",
        thumbnail: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/606407/01/fnd/IND/fmt/png/Royal-Challengers-Bangalore-2023-Women's-Replica-Jersey",
        Men: "no",
        Women: "yes",
        Ipl: "yes",
        Wpl: "yes",
        International: "no",
        Size: "One Size-Free Size",
        Category: "Jersey",
        Rating: "5.0",
        discountprice: 1799,
        mrp: 1999,
    },



]




export default function Products({ name, ...props }) {
    const [selectedGenders, setSelectedGenders] = useState([]);
    const [sortOption, setSortOption] = useState('');//for price sorting.
    let [categoryFilters, setcategoryFilters] = useState(new Set());//for category jerceys gears merchant. etc.
    let [collection, setCollaction] = useState('')
    const [men, setmen] = useState(false);
    const [women, setwomen] = useState(false);



    const handleSortChange = (event) => {
        setSortOption(event.target.value);
        console.log(event.target.value)


        if (event.target.value === 'highToLow') {
            productData.sort((a, b) => b.discountprice - a.discountprice);
            console.log(productData);
        }
        else if (event.target.value === 'lowToHigh') {
            productData.sort((a, b) => a.discountprice - b.discountprice);
            console.log(productData)

        }
    };

    const handlemenChange = (event) => {
        setCollaction(event.target.checked);
        console.log(event.target.value);

        if (event.target.value === 'men') {
            const filteredProducts = productData.filter((xyz) => xyz.Men === "yes");
            //  setCollaction(filteredProducts)
            productData = filteredProducts;
            console.log(filteredProducts);
        }
    };

    const handlewomenChange = (event) => {
        setCollaction(event.target.checked);
        console.log(event.target.value);

        if (event.target.value === 'women') {
            let filteredProducts = productData.filter((xyz) => xyz.Women === "yes");

            // setCollaction(filteredProducts)


            console.log(filteredProducts)
            productData = filteredProducts
            console.log(productData)
        }

    };




    useEffect(() => {
        console.log(productData);
    }, []);

    //This code for CATEGORIES filter 

    function updateFilters(checked, categoryFilter) {
        if (checked)
            setcategoryFilters((prev) => new Set(prev).add(categoryFilter));
        if (!checked)
            setcategoryFilters((prev) => {
                const next = new Set(prev);
                next.delete(categoryFilter);
                return next;
            });
    }
    const filteredProducts =
        categoryFilters.size === 0
            ? productData
            : productData.filter((p) => categoryFilters.has(p.Category));


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleCloseDrawer = () => {
        if (mobileOpen) {
            setMobileOpen(false);
        }
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <div className='d-flex justify-content-center'>
                    <p className='category'>
                        SORT BY
                    </p>
                </div>

                <div>
                    <input
                        type="radio"
                        id="lowToHigh"
                        value="lowToHigh"
                        checked={sortOption === 'lowToHigh'}
                        onChange={handleSortChange}
                    />
                    <label htmlFor="lowToHigh">Low to High</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="highToLow"
                        value="highToLow"
                        checked={sortOption === 'highToLow'}
                        onChange={handleSortChange}
                    />
                    <label htmlFor="highToLow">High to Low</label>
                </div>

                <div className='d-flex justify-content-center'>
                    <p className='category'>
                        CATEGORIES
                    </p>
                </div>
                {cateGender.map((elm, index) => {
                    return (
                        <div className="form-check ms-2" key={index}>
                            <label className="form-check-label" >
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    onClick={handleCloseDrawer}
                                    onChange={(e) => updateFilters(e.target.checked, elm)}
                                />
                                {elm}
                            </label>
                        </div>
                    );
                })}


                {/*  collection filter  */}

                <div className='d-flex justify-content-center'>
                    <p>
                        Collection
                    </p>
                </div>
                <div className="form-check ms-2" >
                    <label>
                        <input
                            type="checkbox"
                            onChange={handlemenChange}
                            value="men"
                        />
                        Men
                    </label>
                </div>

                <div className="form-check ms-2" >
                    <label>

                        <input
                            type="checkbox"
                            onChange={handlewomenChange}
                            value="women"
                        />
                        Women
                    </label>
                </div>


            </List>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;



    return (
        <Layout>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <div>
                        <div className='row d-flex justify-content-center m-0 p-0' >
                            {filteredProducts.map((i) =>
                                <div className='col-lg-4 col-md-6'>
                                    <div className='product-container '>
                                        <span title="Add to Wishlist" className="wishlist-heart">
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth="0"
                                                viewBox="0 0 512 512"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M458.4 64.3C400.6 15.7 311.3 23 256 79.3 200.7 23 111.4 15.6 53.6 64.3-21.6 127.6-10.6 230.8 43 285.5l175.4 178.7c10 10.2 23.4 15.9 37.6 15.9 14.3 0 27.6-5.6 37.6-15.8L469 285.6c53.5-54.7 64.7-157.9-10.6-221.3zm-23.6 187.5L259.4 430.5c-2.4 2.4-4.4 2.4-6.8 0L77.2 251.8c-36.5-37.2-43.9-107.6 7.3-150.7 38.9-32.7 98.9-27.8 136.5 10.5l35 35.7 35-35.7c37.8-38.5 97.8-43.2 136.5-10.6 51.1 43.1 43.5 113.9 7.3 150.8z"></path>
                                            </svg>
                                        </span>
                                        <div className="product-image-container">
                                            <img className='product-image' src={i.thumbnail} />

                                        </div>
                                        <div className="product-info">
                                            <div className="title-rating">
                                                <h3 title="India 2003-06 Jersey">{i.products}</h3>
                                                <div className="rating-star-high">
                                                    <span>{i.Rating}</span>
                                                    <span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth="0"
                                                            viewBox="0 0 576 512"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <p className="discounted-price">₹{i.discountprice}</p>
                                                <p className="price-tag">₹{i.mrp}</p>
                                            </div>
                                            <button className="add-to-cart-btn">
                                                <svg
                                                    stroke="currentColor"
                                                    fill="currentColor"
                                                    strokeWidth="0"
                                                    viewBox="0 0 576 512"
                                                    height="1em"
                                                    width="1em"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994-29.823-.429-54.35-24.631-55.155-54.447-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938-28.54-1.325-51.751-24.385-53.251-52.917-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320zM408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16z"></path>
                                                </svg>
                                                Add to Cart
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            )}

                        </div>

                    </div>
                </Box>
            </Box>
            ;





        </Layout>
    )
}
