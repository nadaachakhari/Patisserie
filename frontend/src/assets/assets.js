import logo from './logo.png'
import panier from './panier.png'
import gateau from './gateau.png'
import brownies from './brownies.jpg'
import panettone from './panettone.jpg'
import cake_caramel from './cake_caramel.jpg'
import crepe from './crêpes.jpg'
import fondant from './fondant.jpg'
import Gauffre from './Gaufres.jpg'
import Madeleine from './Madeleine.jpg'
import macaron from './macron.jpg'
import gateau_choco from './chocolate_cake.jpg'
import tart_with_strawberries from './tart-with-strawberries.jpg'
import croissants from './croissants.jpg'
import macarons from './macarons.jpg'
import tiramisu from './Tiramisu.jpg'
import milleFeuille from './mille_feuille.png'
import galette from './galette des rois.jpg'
import rating_starts from './rating-stars.png'
import add from './add_icon.png'
import remove_icon from './remove_icon_red.png'
import add_icon from './add_icon_green.png'


export const assets = {
    logo,
    panier,
    gateau,
    brownies,
    panettone,
    cake_caramel,
    crepe,
    fondant,
    Gauffre,
    Madeleine,
    macaron,
    gateau_choco,
    tart_with_strawberries,
    croissants,
    macarons,
    tiramisu,
    milleFeuille,
    galette,
    rating_starts,
    add,
    remove_icon,
    add_icon
}

export const menu_list = [
    {
        menu_name: "crepe",
        menu_image: crepe
    },
    {
        menu_name: "fondant",
        menu_image: fondant
    },
    {
        menu_name: "cake caramel",
        menu_image: cake_caramel
    },
    {
        menu_name: "Gauffre",
        menu_image: Gauffre
    },
    {
        menu_name: "Madeleine",
        menu_image: Madeleine
    },
    {
        menu_name: "Macaron",
        menu_image: macaron
    },
    {
        menu_name: "panettone",
        menu_image: panettone
    },
    {
        menu_name: "Brownise",
        menu_image: brownies
    },
    {
        menu_name: "Gateau",
        menu_image: gateau
    }
]

export const Patisserie_list = [
    {
        _id: "1",
        name: "Gâteau au Chocolat",
        image: gateau_choco,
        description: "Un délicieux gâteau au chocolat, moelleux et riche en saveurs. Parfait pour les amateurs de chocolat.",
        price: "12",
        category: "Gâteaux"
    },
    {
        _id: "2",
        name: "Tarte aux Fraises",
        image: tart_with_strawberries,
        description: "Une tarte aux fraises fraîche et légère, garnie de fraises juteuses et d'une crème pâtissière onctueuse.",
        price: "15",
        category: "Tartes"
    },
    {
        _id: "3",
        name: "Croissant",
        image: croissants,
        description: "Un croissant au beurre croustillant et doré, parfait pour un petit déjeuner ou une pause gourmande.",
        price: "3",
        category: "Viennoiseries"
    },
    {
        _id: "4",
        name: "Macarons",
        image: macarons,
        description: "Une sélection de macarons aux saveurs variées, délicatement croustillants à l'extérieur et fondants à l'intérieur.",
        price: "15",
        category: "Confiseries"
    },
    {
        _id: "5",
        name: "Macarons",
        image: macarons,
        description: "Une sélection de macarons aux saveurs variées, délicatement croustillants à l'extérieur et fondants à l'intérieur.",
        price: "30",
        category: "Confiseries"
    },
    {
        _id: "6",
        name: "Tiramisu",
        image: tiramisu,
        description: "Un dessert italien classique fait de couches de biscuits imbibés de café, de mascarpone crémeux et de poudre de cacao.",
        price: "8",
        category: "Desserts"
    },
    {
        _id: "7",
        name: "Mille-Feuille",
        image: milleFeuille,
        description: "Une pâtisserie française composée de couches de pâte feuilletée croustillante et de crème pâtissière vanillée.",
        price: "2",
        category: "Desserts"
    },
    {
        _id: "8",
        name: "Galette des Rois",
        image: galette,
        description: "Une galette des rois feuilletée garnie de frangipane, idéale pour célébrer l'Épiphanie.",
        price: "12",
        category: "Gâteaux"
    }
]