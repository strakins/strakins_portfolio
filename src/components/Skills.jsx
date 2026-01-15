import React from "react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "React Native", level: 90 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 }
      ],
      value: "Building responsive, conversion-optimized interfaces"
    },
    {
      category: "Backend & Database",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "MongoDB", level: 85 },
        { name: "Firebase", level: 88 },
        { name: "REST APIs", level: 92 }
      ],
      value: "Scalable architecture & real-time data handling"
    },
    {
      category: "Business Solutions",
      skills: [
        { name: "E-commerce", level: 90 },
        { name: "POS Systems", level: 85 },
        { name: "Real-time Apps", level: 88 },
        { name: "Mobile Apps", level: 92 }
      ],
      value: "Applications that drive business growth"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold">EXPERTISE THAT DELIVERS</span>
          <h3 className="text-4xl font-bold text-white mt-2">
            Technical Skills That <span className="text-cyan-400">Solve Problems</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-3xl mx-auto text-lg">
            I combine technical expertise with business understanding to build solutions that work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="bg-gray-800/50 p-6 rounded-2xl hover:bg-gray-800 transition-colors">
              <h4 className="text-xl font-bold text-white mb-4">{category.category}</h4>
              <p className="text-cyan-400 mb-6 text-sm">{category.value}</p>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
          <h4 className="text-2xl font-bold text-white mb-4 text-center">
            My Development Approach
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📱", title: "Mobile-First", desc: "Responsive designs that work everywhere" },
              { icon: "⚡", title: "Performance", desc: "Fast loading & smooth interactions" },
              { icon: "🔧", title: "Clean Code", desc: "Scalable, maintainable architecture" },
              { icon: "🎯", title: "Business Focus", desc: "Solutions that drive growth" }
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h5 className="text-white font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;