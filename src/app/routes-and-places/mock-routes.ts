import { Route } from './route.model';
import { Point } from './point.model';

export const ROUTES: Route[] = [
  new Route (1, 'Spain', "Sunny trip around Malaga coast", [
    new Point (1, "Playa la Malagueta", "One of the best beaches on the Costa del Sol", "https://media-cdn.tripadvisor.com/media/photo-s/0e/f0/b0/0f/playa-de-la-malagueta.jpg", 36.7167311, -4.4093306),
    new Point (2, "Jardín Botánico Histórico", "It has more than fifty thousand plants, of two thousand tropical, subtropical and autochthonous species, highlighting the collection with more than a hundred different species of palms, bamboos, aquatic plants and its historic garden.", "https://media-cdn.tripadvisor.com/media/photo-s/02/97/2e/a3/belvedere.jpg", 36.7590021, -4.4321145),
    new Point (3, "Torre del Mar", "", "", 36.7421245, -4.1109501),
    new Point (4, "Frigiliana", "Small and cosy village", "https://media-cdn.tripadvisor.com/media/photo-s/0f/71/e3/f7/frigiliana-malaga.jpg", 36.7898821, -3.9058358),
    new Point (5, "Nerja", "Fantastic views", "https://d1ez3020z2uu9b.cloudfront.net/imagecache/blog-photos/8613.jpg", 36.7547474, -3.8916303)
  ]),
  new Route (2, 'Madeira', "Madeira Best Places", [
    new Point (1, "Jardim Botânico da Madeira", "", "", 32.6600368, -16.9597762),
    new Point (2, "Ponta do Sol", "", "http://us.zooverresources.com/images/T12153082I1590251W900H675/Estalagem-Ponta-Do-Sol.jpg", 32.6895274, -17.1074043),
    new Point (3, "Miradouro Garganta Funda", "", "", 32.8127127, -17.2598202),
    new Point (4, "Piscinas Naturais de Porto Moniz", "", "https://images.turismoenportugal.org/Piscinas-Naturais-Porto-Moniz.jpg", 32.8673893, -17.1723969),
    new Point (5, "Miradouro da Eira da Achada", "", "", 32.8473704, -17.1607874),
    new Point (6, "Grutas de São Vicente", "", "https://media-cdn.tripadvisor.com/media/photo-s/0f/40/27/47/hohle.jpg", 32.8051549, -17.0516564),
    new Point (7, "Ponta de São Lourenço", "", "", 32.7434645, -16.7178583),
    new Point (8, "Aeroporto da Madeira", "", "", 32.6916118, -16.8433901)
  ]),
  new Route (3, 'Baltic Road Trip', "Weekend trip with some friends", [
    new Point (1, "Tallina", "", "", 59.4713918, 24.4573697),
    new Point (2, "Tartu", "", "", 58.3749328, 26.6623333),
    new Point (3, "Rīga", "", "", 56.9711598, 23.848288),
    new Point (4, "Viļņa", "", "", 54.6998463, 24.9720553)
  ]),
];