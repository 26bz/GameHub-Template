import { useState, useEffect } from "react";
import { Search, Server, ChevronDown, Star, Globe } from "lucide-react";
import { Helmet } from 'react-helmet';

const SAMPLE_GAMES = [
  {
    id: 1,
    title: "Minecraft",
    image: "/images/minecraft.jpg",
    category: "Survival",
    players: "1-100+",
    price: 4.99,
    specs: "4GB RAM",
    description: "Build, explore, and survive in this iconic sandbox game.",
    popularity: "High",
    features: ["One-Click Install", "Mod Support", "24/7 Backups"],
    rating: 4.8,
    activeServers: "5,000+",
    badge: "MOST POPULAR",
    promoTag: "Free Domain Included",
    slug: "minecraft",
  },
  {
    id: 2,
    title: "Valheim",
    image: "/images/valheim.jpg",
    category: "Adventure",
    players: "1-10",
    price: 5.99,
    specs: "4GB RAM",
    description: "Viking survival game in a procedurally-generated world.",
    popularity: "Medium",
    features: ["Custom Config", "World Backup", "Plugin Support"],
    rating: 4.6,
    activeServers: "1,200+",
    promoTag: "20% Off",
    slug: "valheim",
  },
  {
    id: 3,
    title: "ARK",
    image: "/images/ark-se.avif",
    category: "Survival",
    players: "1-70",
    price: 7.99,
    specs: "12GB RAM",
    description:
      "Survive in a world filled with dinosaurs and prehistoric creatures.",
    popularity: "High",
    features: ["Anti-DDoS", "Mod Manager", "Auto-Updates"],
    rating: 4.7,
    activeServers: "3,000+",
    badge: "NEW",
    promoTag: "Premium Hardware",
    slug: "ark",
  },
];

const StatCard = ({ icon: Icon, label, value }) => (
  <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
    <div className="flex items-center text-blue-400 mb-1">
      <Icon size={14} className="mr-2" />
      <span className="text-xs sm:text-sm">{label}</span>
    </div>
    <div className="text-white font-bold text-sm sm:text-base">{value}</div>
  </div>
);

const FeatureItem = ({ feature }) => (
  <div className="text-gray-300 flex items-center text-sm sm:text-base">
    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" />
    {feature}
  </div>
);

const FilterButton = ({ label, options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full bg-gray-800/50 backdrop-blur-sm text-white px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all"
      >
        <span className="text-xs sm:text-sm">
          {label}: {value || "All"}
        </span>
        <ChevronDown
          size={14}
          className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-gray-800/90 backdrop-blur-sm rounded-xl border border-gray-700 shadow-xl">
          <div className="py-1">
            <button
              onClick={() => {
                onChange("");
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-300 hover:bg-blue-500/20 transition-colors"
            >
              All
            </button>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-xs sm:text-sm text-gray-300 hover:bg-blue-500/20 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const GameCard = ({ game }) => (
  <div className="group bg-gradient-to-br from-gray-800/50 via-gray-800/30 to-gray-900/50 rounded-2xl backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={game.image}
        alt={game.title}
        className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {game.badge && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium animate-pulse">
          {game.badge}
        </div>
      )}
      {game.promoTag && (
        <div className="absolute top-4 left-4 bg-green-500 text-black px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-semibold">
          {game.promoTag}
        </div>
      )}
    </div>

    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-2 sm:mb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-white">
          {game.title}
        </h3>
        <div className="flex items-center bg-gray-800 rounded-full px-2 sm:px-3 py-1">
          <Star size={14} className="text-yellow-400 fill-yellow-400 mr-1" />
          <span className="text-white font-medium text-sm">{game.rating}</span>
        </div>
      </div>

      <p className="text-gray-300 mb-4 text-sm sm:text-base">
        {game.description}
      </p>

      <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-4">
        <StatCard
          icon={Server}
          label="Active Servers"
          value={game.activeServers}
        />
        <StatCard icon={Globe} label="Global Locations" value="15+ Regions" />
      </div>

      <div className="space-y-2 mb-4 sm:mb-6">
        {game.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 pt-4 border-t border-gray-700/50">
        <div>
          <div className="text-gray-400 text-xs sm:text-sm">Starting at</div>
          <div className="text-xl sm:text-2xl font-bold text-white">
            ${game.price}
            <span className="text-gray-400 text-xs sm:text-sm font-normal">
              /month
            </span>
          </div>
        </div>
        <a
          href={`${game.slug}`}
          className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 font-medium flex items-center justify-center text-sm sm:text-base"
        >
          <Server size={16} className="mr-2" />
          Deploy Server
        </a>
      </div>
    </div>
  </div>
);

export default function GamesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [popularityFilter, setPopularityFilter] = useState("");
  const [filteredGames, setFilteredGames] = useState(SAMPLE_GAMES);

  useEffect(() => {
    let results = SAMPLE_GAMES;

    if (searchQuery) {
      results = results.filter(
        (game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (categoryFilter) {
      results = results.filter((game) => game.category === categoryFilter);
    }
    if (popularityFilter) {
      results = results.filter((game) => game.popularity === popularityFilter);
    }

    setFilteredGames(results);
  }, [searchQuery, categoryFilter, popularityFilter]);

  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-black py-16 sm:py-24 relative overflow-hidden">
      <Helmet>
        <title>Game Servers | GameHub</title>
        <meta
          name="description"
          content="Deploy a Minecraft server in seconds with MyApp's enterprise-grade hosting."
        />
      </Helmet>
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-clip-text py-2 sm:py-3 text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-3 sm:mb-4">
            Premium Game Servers
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Deploy your game server in seconds with enterprise-grade hardware
          </p>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400"
                />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800/50 text-white pl-12 pr-4 py-2.5 sm:py-3 rounded-xl border border-gray-700/50 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 transition-all text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="flex gap-4">
              <FilterButton
                label="Category"
                options={["Survival", "Adventure", "FPS"]}
                value={categoryFilter}
                onChange={setCategoryFilter}
              />
              <FilterButton
                label="Popularity"
                options={["High", "Medium", "Low"]}
                value={popularityFilter}
                onChange={setPopularityFilter}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {filteredGames.length === 0 && (
          <div className="text-center py-8 sm:py-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50">
            <p className="text-gray-300 text-lg sm:text-xl mb-3 sm:mb-4">
              No games found matching your criteria
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setCategoryFilter("");
                setPopularityFilter("");
              }}
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium text-sm sm:text-base"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
