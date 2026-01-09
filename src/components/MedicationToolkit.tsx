import { MedicationCard } from "@/components/ui/MedicationCard";
import zepboundImg from "@/assets/medications/zepbound.png";
import mounjaroImg from "@/assets/medications/mounjaro.png";
import wegovyImg from "@/assets/medications/wegovy.png";
import ozempicImg from "@/assets/medications/ozempic.png";
import saxendaImg from "@/assets/medications/saxenda.png";
import metforminImg from "@/assets/medications/metformin.png";

const medications = [
  {
    name: "Wegovy®",
    imageUrl: wegovyImg,
    type: "GLP-1",
    activeIngredient: "semaglutide",
    deliveryMethod: "injection" as const,
    benefits: ["Balances blood sugar", "Reduces appetite", "Regulates insulin"],
    boxWarning:
      "Semaglutide causes thyroid C-cell tumors in rodents. It is unknown whether semaglutide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans. Contraindicated in patients with a personal or family history of MTC or MEN 2.",
    warning:
      "Risk of pancreatitis. Discontinue promptly if suspected. Gallbladder problems including gallstones. Acute kidney injury. Hypoglycemia when used with insulin or sulfonylureas.",
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Vomiting",
      "Constipation",
      "Abdominal pain",
      "Headache",
      "Fatigue",
      "Dizziness",
    ],
    drugInteractions:
      "May delay absorption of oral medications. Dose reduction of insulin or sulfonylureas may be needed to reduce hypoglycemia risk.",
  },
  {
    name: "Zepbound®",
    imageUrl: zepboundImg,
    type: "GLP-1 / GIP",
    activeIngredient: "tirzepatide",
    deliveryMethod: "injection" as const,
    benefits: ["Regulates insulin", "Balances blood sugar", "Reduces appetite"],
    boxWarning:
      "Tirzepatide causes thyroid C-cell tumors in rats. It is unknown whether tirzepatide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans. Tirzepatide is contraindicated in patients with a personal or family history of MTC or in patients with Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).",
    warning:
      "Risk of thyroid C-cell tumors. Counsel patients regarding the potential risk and symptoms of thyroid tumors. Pancreatitis has been reported. If pancreatitis is suspected, discontinue use and do not restart.",
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Decreased appetite",
      "Vomiting",
      "Constipation",
      "Indigestion",
      "Stomach pain",
      "Fatigue",
    ],
    drugInteractions:
      "May affect the absorption of oral medications. Use with insulin or insulin secretagogues may increase risk of hypoglycemia. Consider dose reduction of insulin when initiating treatment.",
  },
  {
    name: "Mounjaro®",
    imageUrl: mounjaroImg,
    type: "GLP-1 / GIP",
    activeIngredient: "tirzepatide",
    deliveryMethod: "injection" as const,
    benefits: ["Balances blood sugar", "Reduces appetite", "Regulates insulin"],
    boxWarning:
      "Tirzepatide causes thyroid C-cell tumors in rats. It is unknown whether tirzepatide causes thyroid C-cell tumors, including medullary thyroid carcinoma (MTC), in humans. Contraindicated in patients with a personal or family history of MTC or MEN 2.",
    warning:
      "Pancreatitis has been reported. Discontinue if pancreatitis is suspected. Hypoglycemia risk when used with insulin or sulfonylureas. Acute kidney injury and diabetic retinopathy complications have been reported.",
    sideEffects: [
      "Nausea",
      "Diarrhea",
      "Decreased appetite",
      "Vomiting",
      "Constipation",
      "Dyspepsia",
      "Abdominal pain",
      "Injection site reactions",
    ],
    drugInteractions:
      "Delays gastric emptying which may affect absorption of oral medications. Increased risk of hypoglycemia with insulin or sulfonylureas.",
  },
  {
    name: "Ozempic®",
    imageUrl: ozempicImg,
    type: "GLP-1",
    activeIngredient: "semaglutide",
    deliveryMethod: "injection" as const,
    benefits: ["Balances blood sugar", "Reduces appetite", "Regulates insulin"],
    boxWarning:
      "Semaglutide causes thyroid C-cell tumors in rodents. It is unknown whether semaglutide causes thyroid C-cell tumors, including MTC, in humans. Contraindicated in patients with MTC or MEN 2.",
    warning:
      "Pancreatitis has been reported. Acute gallbladder disease. Hypoglycemia risk with concomitant use of insulin or sulfonylureas. Diabetic retinopathy complications in patients with history of diabetic retinopathy.",
    sideEffects: [
      "Nausea",
      "Vomiting",
      "Diarrhea",
      "Abdominal pain",
      "Constipation",
      "Decreased appetite",
      "Headache",
      "Fatigue",
    ],
    drugInteractions:
      "Consider reducing insulin or sulfonylurea dose. May affect absorption of concomitant oral medications.",
  },
  {
    name: "Saxenda®",
    imageUrl: saxendaImg,
    type: "GLP-1",
    activeIngredient: "liraglutide",
    deliveryMethod: "injection" as const,
    benefits: ["Balances blood sugar", "Reduces appetite", "Regulates insulin"],
    boxWarning:
      "Liraglutide causes thyroid C-cell tumors in rodents. It is unknown whether liraglutide causes thyroid C-cell tumors, including MTC, in humans. Contraindicated in patients with a personal or family history of MTC or MEN 2.",
    warning:
      "Pancreatitis. Acute gallbladder disease. Suicidal behavior and ideation have been reported. Hypoglycemia with concomitant diabetes medications.",
    sideEffects: [
      "Nausea",
      "Hypoglycemia",
      "Diarrhea",
      "Constipation",
      "Vomiting",
      "Headache",
      "Decreased appetite",
      "Fatigue",
    ],
    drugInteractions:
      "Insulin or sulfonylureas may need dose reduction. May affect absorption of oral medications due to delayed gastric emptying.",
  },
  {
    name: "Metformin",
    imageUrl: metforminImg,
    type: "Biguanide",
    activeIngredient: "metformin",
    deliveryMethod: "oral" as const,
    benefits: ["Balances blood sugar", "Regulates insulin"],
    boxWarning:
      "Lactic acidosis is a rare but serious complication. Risk increases with conditions such as sepsis, dehydration, excess alcohol, hepatic impairment, renal impairment, and acute heart failure.",
    warning:
      "May cause lactic acidosis. Temporarily discontinue before iodinated contrast imaging procedures. Monitor renal function. Vitamin B12 deficiency may occur.",
    sideEffects: [
      "Diarrhea",
      "Nausea",
      "Vomiting",
      "Flatulence",
      "Abdominal discomfort",
      "Indigestion",
      "Asthenia",
      "Headache",
    ],
    drugInteractions:
      "Carbonic anhydrase inhibitors may increase lactic acidosis risk. Alcohol potentiates effect on lactate metabolism. Cationic drugs may compete for renal tubular secretion.",
  },
];

export function MedicationToolkit() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="gradient-text">Medication Toolkit</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know the different medications our clinicians can prescribe and how they may help you on your weight care journey.
          </p>
        </div>

        <div className="space-y-6">
          {medications.map((medication, index) => (
            <MedicationCard key={index} {...medication} />
          ))}
        </div>
      </div>
    </section>
  );
}
