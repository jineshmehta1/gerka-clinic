import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, Calendar, Award, Target, Users, Heart } from "lucide-react"

export default function SuccessStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Anshul bangar",
      age: 21,
      image: "/anshulAcheivement.jpg",
      achievement: "University Champion",
      timeframe: "10 years",
      story:
        "Anshul started as a complete beginner who barely knew how the pieces moved. Through Kamesh Choudhary's innovative teaching methodology and dedicated practice, she not only learned the fundamentals but developed a real passion for the game. His breakthrough came during our intermediate program when she started seeing tactical patterns naturally. Now he's the champion of his college chess club and regularly competes in regional tournaments with confidence.",
      quote: "Chess taught me to think before I act, and now I use that strategy in everything I do!",
      badges: ["Regional Finalist", "School Champion", "Rapid Improvement"],
      program: "Strategic Mastery",
    },
    {
      id: 2,
      name: "Alex Chen",
      age: 10,
      image: "https://www.chesspuzzles.com/wp-content/uploads/2017/12/Little-Boy-Making-a-Chess-Move.jpg",
      achievement: "State Qualifier",
      rating: "From 600 to 1400",
      timeframe: "8 months",
      story:
        "Alex joined us with some basic knowledge but lacked confidence in competitive play. Our tournament preparation program and Kamesh's personalized coaching helped him develop not just technical skills but also the mental fortitude needed for serious competition. His parents noticed improvements in his concentration and problem-solving abilities at school too. Alex now represents his state in national junior championships and dreams of becoming a master.",
      quote: "I love how chess makes me think differently about problems. Every game is a new puzzle to solve!",
      badges: ["State Qualifier", "Mental Strength", "Academic Improvement"],
      program: "Tournament Warrior",
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      age: 14,
      image: "https://www.successacademies.org/wp-content/uploads/2022/02/unnamed-1.jpg",
      achievement: "National Competitor",
      rating: "From 800 to 1600",
      timeframe: "12 months",
      story:
        "Sofia came to us as an intermediate player who had hit a plateau. Our Grandmaster Path program helped her break through by focusing on deep positional understanding and endgame technique under Kamesh's expert guidance. She's now one of the top junior players in her state and has her sights set on earning a national master title. Her analytical skills have also helped her excel in mathematics and science at school.",
      quote: "Kamesh sir taught me that every position tells a story. Now I can read those stories and write my own!",
      badges: ["National Competitor", "Rating Expert", "STEM Excellence"],
      program: "Grandmaster Path",
    },
    {
      id: 4,
      name: "Michael Thompson",
      age: 16,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS20YiAa6KMXkNAMglfIrQpAK4TNV6WIve56MSI2ua0zGByCZ2Uilg2bize0oHg-MjzJxk&usqp=CAU",
      achievement: "College Scholarship",
      rating: "From 1000 to 1800",
      timeframe: "18 months",
      story:
        "Michael's chess journey with us led to something unexpected - a college scholarship! His dedication to chess demonstrated the discipline and strategic thinking that colleges value. Beyond the scholarship, chess has shaped his leadership skills, and he now captains his high school chess team while mentoring younger players in our academy. Kamesh's mentorship extended beyond chess, helping him develop life skills.",
      quote:
        "Chess opened doors I never knew existed. It's not just a game - it's a life skill that changed everything!",
      badges: ["College Scholarship", "Team Captain", "Mentor"],
      program: "Private Coaching",
    },
    {
      id: 5,
      name: "Lily Wang",
      age: 8,
      image: "https://npr.brightspotcdn.com/dims4/default/7e6d922/2147483647/strip/true/crop/1500x921+0+0/resize/880x540!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fsites%2Fkwmu%2Ffiles%2F201602%2Fchess_as_vogt.jpg",
      achievement: "Youngest Regional Winner",
      rating: "From 200 to 900",
      timeframe: "10 months",
      story:
        "At just 8 years old, Lily became the youngest player ever to win her regional age group championship. Her natural talent combined with our nurturing Chess Foundations program helped her develop both tactical sharpness and emotional resilience. She's proof that age is just a number when you have passion and proper guidance from experienced instructors like those at our academy.",
      quote: "Chess is like magic! I can make my pieces dance and create beautiful patterns on the board!",
      badges: ["Youngest Winner", "Natural Talent", "Emotional Growth"],
      program: "Chess Foundations",
    },
    {
      id: 6,
      name: "David Kim",
      age: 15,
      image: "https://sundial.csun.edu/wp-content/uploads/2022/05/qs1K82M1oI7yBqTIPHwDKgGtSSbwtv43O2TUyOoM-e1652990417239-900x591.jpeg",
      achievement: "International Tournament",
      rating: "From 1200 to 2000",
      timeframe: "24 months",
      story:
        "David's two-year journey with us culminated in representing his country at an international youth championship. His transformation from a casual player to a serious competitor showcases what's possible with dedication and expert guidance from Kamesh Choudhary's proven methodology. He's now considering a career in chess while maintaining excellent grades in school, proving that chess enhances rather than detracts from academic performance.",
      quote:
        "Every lesson taught me something new, not just about chess, but about myself and what I'm capable of achieving!",
      badges: ["International Player", "Expert Rating", "Future Master"],
      program: "Grandmaster Path",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-6xl font-black mb-6">
            Success{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Stories</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Real transformations from our students who've achieved remarkable success through Kamesh Choudhary's proven
            chess training methodology
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  5000+
                </div>
                <div className="text-gray-600 font-semibold">Students Transformed</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-gray-600 font-semibold">Tournament Winners</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-2">
                  98%
                </div>
                <div className="text-gray-600 font-semibold">Rating Improvement</div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-6 text-center">
                <div className="text-4xl font-black bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent mb-2">
                  20+
                </div>
                <div className="text-gray-600 font-semibold">Years Excellence</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <Card className="bg-white shadow-2xl border-0 overflow-hidden">
                    <div className="relative">
                      <img
                        src={story.image || "/placeholder.svg"}
                        alt={story.name}
                        className="w-full h-96 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <Card className="bg-white/95 backdrop-blur-sm border-0">
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <h3 className="text-xl font-black text-gray-800">{story.name}</h3>
                                <p className="text-gray-600">
                                  Age {story.age} • {story.program}
                                </p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                                  {story.achievement}
                                </div>
                                <div className="text-sm text-gray-600">{story.timeframe}</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="flex flex-wrap gap-3">
                    {story.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-4 py-2"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-0 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                        <div className="font-black text-gray-800 text-lg">Rating Progress</div>
                        <div className="text-gray-600 font-semibold">{story.rating}</div>
                      </CardContent>
                    </Card>
                    <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-0 shadow-lg">
                      <CardContent className="p-6 text-center">
                        <Calendar className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                        <div className="font-black text-gray-800 text-lg">Time Frame</div>
                        <div className="text-gray-600 font-semibold">{story.timeframe}</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-br from-gray-50 to-purple-50/30 border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-2xl font-bold">"</span>
                        </div>
                        <p className="text-gray-800 italic text-lg leading-relaxed font-medium">{story.quote}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <p className="text-gray-700 leading-relaxed text-lg">{story.story}</p>

                  <Card className="bg-white border-2 border-orange-200 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <Trophy className="w-8 h-8 text-orange-500" />
                        <div>
                          <span className="font-black text-orange-600 text-xl">{story.achievement}</span>
                          <p className="text-gray-600">Achieved through {story.program}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Students Succeed */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-black mb-6">
              Why Our Students{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Succeed</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The key factors behind every success story at Genius Chess Academy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Approach",
                description: "Every student gets a customized learning path based on their unique strengths and goals",
                gradient: "from-purple-500 to-blue-500",
              },
              {
                icon: Award,
                title: "Expert Mentorship",
                description: "Direct guidance from Kamesh Choudhary and experienced chess masters",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: Users,
                title: "Supportive Community",
                description: "A family-like environment where students motivate and learn from each other",
                gradient: "from-cyan-500 to-green-500",
              },
              {
                icon: Heart,
                title: "Holistic Development",
                description: "Focus on character building, confidence, and life skills beyond chess",
                gradient: "from-green-500 to-yellow-500",
              },
            ].map((factor, index) => (
              <Card
                key={index}
                className="bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 text-center"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${factor.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <factor.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{factor.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/chess-pattern.svg')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-8">
            Ready to Write Your{" "}
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Success Story?
            </span>
          </h2>
          <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join our community of successful students and start your transformation with Kamesh Choudhary's proven
            methodology today
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-2xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Calendar className="w-6 h-6 mr-2" />
              Book Your Free Demo
            </Button>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold text-2xl px-12 py-6 rounded-full bg-transparent transition-all duration-300"
            >
              View All Programs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
