    import React from "react";
    import malaysiaimg from "../../assets/malaysia.jpeg";
    import DonationCard from "../DonationCard";

    function Malaysia() {
    const oneTimeAmounts = [
        { amount: "RM120", desc: "Support a child with malnutrition" },
        { amount: "RM300", desc: "Food Pack For 1 Family" },
        { amount: "RM2,000", desc: "Hifz Sponsorship" },
        { amount: "RM2,200", desc: "Sponsor an Orphan" },
    ];

    const monthlyAmounts = [
        { amount: "RM50", desc: "Sponsor 1 child's school fees" },
        { amount: "RM100", desc: "Monthly Food Pack" },
        { amount: "RM500", desc: "Medical aid support" },
    ];

    const plans = [
        {
        title: "2024 Plan For Malaysia",
        desc: "In 2024, GRT Malaysia is committed to expanding its humanitarian efforts across the nation, focusing on providing essential support in areas of food, water, clothing, and medical equipment. We aim to strengthen outreach to ensure necessities reach those most in need.",
        },
        {
        title: "Food Initiatives",
        desc: "Plans to scale up food distribution programs targeting underserved communities. Collaborating with farmers, food banks, and agencies to enhance access to nutritious food while promoting sustainable agriculture.",
        },
        {
        title: "Water Access and Sanitation Projects",
        desc: "Launching initiatives to improve clean water access and sanitation infrastructure through water filtration, well construction, and hygiene education in underserved areas.",
        },
        {
        title: "Clothing Distribution and Welfare Programs",
        desc: "Expanding clothing distribution programs to provide warmth and dignity to families in hardship. Through outreach and community engagement, providing skill-building and vocational training opportunities.",
        },
        {
        title: "Medical Equipment Provision and Healthcare",
        desc: "Bolstering healthcare by providing essential medical supplies to clinics and hospitals. Collaborating with healthcare professionals to enhance access to quality services and preventive care.",
        },
        {
        title: "Educational Programs",
        desc: "Launching educational initiatives to improve literacy, vocational skills, and scholarship programs. Focusing on empowerment through education, breaking the cycle of poverty and promoting sustainability.",
        },
    ];

    return (
        <section className="text-gray-800">
        <div className="flex flex-col md:flex-row">
            {/* Donation Card */}
            <div className="w-full md:w-1/3 p-6">
            <DonationCard oneTimePlans={oneTimeAmounts} monthlyPlans={monthlyAmounts} />
            </div>

            {/* About Section */}
            <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
            <h1 className="text-4xl font-bold text-blue-600 text-center mb-6">Malaysia</h1>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Drawing inspiration from the organization’s global efforts, GRT Malaysia aims to eradicate poverty,
                promote education among underprivileged children, and provide extensive community support.
                Focused on the unique needs of Malaysia, the chapter endeavors to deliver essential resources including
                food, water, clothing, and medical equipment while also initiating educational programs and sustainable projects.
            </p>
            <img
                src={malaysiaimg}
                alt="Malaysia"
                className="rounded-xl shadow-lg mb-6 w-full"
            />
            </div>
        </div>

        {/* Program Section */}
        <div className="p-6 bg-white">
            <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">Our Programs</h2>
            <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
                <div
                key={i}
                className="bg-gray-50 p-5 rounded-lg shadow hover:shadow-lg transition"
                >
                <h3 className="text-lg font-bold text-blue-600 mb-2">{plan.title}</h3>
                <p className="text-gray-700 text-sm">{plan.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>
    );
    }

    export default Malaysia;
