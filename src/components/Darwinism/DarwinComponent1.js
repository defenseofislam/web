import React, { useEffect } from "react";
import { Layout, Typography } from "antd";
import { Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import CommentBox from "../CommentBox";

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

function DarwinComponent1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Content style={{ padding: "24px" }}>
      <Typography>
        <Title level={2}>
          Is Darwinian evolution hypothesis better than believing in
          Creationism?{" "}
          <Tooltip title="Note: Throughout this article, 'evolution' refers specifically to Darwinian (macro) evolution, not observable microevolution or adaptation.">
            <InfoCircleOutlined style={{ marginLeft: 8, color: "#1890ff" }} />
          </Tooltip>
        </Title>
        ----{" "}
        <Text italic type="secondary">
          Written By Fida Kareem[Mbbs Student]
        </Text>
        <Title level={4}>Abstract</Title>
        <Paragraph>
          <Text italic>
            The debate between <Text strong>Darwinian evolution</Text> and{" "}
            <Text strong>Creationism</Text> remains one of the most{" "}
            <Text type="danger">polarizing subjects</Text> in modern science and
            theology.
          </Text>{" "}
          While proponents of evolution argue it is grounded in{" "}
          <Text code>empirical evidence</Text>, critics highlight{" "}
          <Text type="warning">philosophical assumptions</Text>,{" "}
          <Text type="warning">data inconsistencies</Text>, and{" "}
          <Text type="danger">unproven mechanisms</Text> that underlie evolutionary
          theory.{" "}
          <Text mark>
            Creationism, particularly within the Islamic tradition, offers a
            theocentric explanation of life rooted in divine intent, purpose,
            and design.
          </Text>{" "}
          <Text underline>
            This article critically examines the evidence behind Darwinian
            claims, challenges to its foundational assumptions, and contrasts it
            with the intellectual coherence and metaphysical grounding of the
            Creationist worldview.
          </Text>
        </Paragraph>
        <hr />
        <Title level={4}>
          1. Critique of Evolutionary Transitional Fossils
        </Title>
        <Paragraph>
          <Text italic>
            Many critics of Islamic tradition appeal to evolutionary theory to
            assert the superiority of secular science over religious narratives.
          </Text>{" "}
          However, even evolutionary <Text code>"evidence"</Text> is not immune
          to scrutiny. Several famous transitional fossils, often touted in
          textbooks and media, have been the subject of{" "}
          <Text type="danger">intense scientific debate</Text> and reevaluation:
          {"\n\n"}- <Text mark>Tiktaalik:</Text> Commonly cited as a
          fish-to-tetrapod transitional fossil, yet it was
          <Text strong> fully aquatic </Text>and lacked definitive transitional
          features. <Text underline>More critically</Text>, fossilized trackways
          of fully walking tetrapods found in Poland{" "}
          <Text strong>predate Tiktaalik by 18 million years</Text>, undermining
          its position in the evolutionary sequence.{" "}
          <Text type="secondary">
            [Reference: Niedźwiedzki et al., Nature, 2010]
          </Text>
          {"\n\n"}- <Text mark>Archaeopteryx:</Text> Often hailed as the bridge
          between dinosaurs and birds, but many paleontologists now consider it
          a <Text strong>fully formed bird</Text>. It had flight feathers, a
          wishbone, and perching feet like modern birds. Supposed “reptilian”
          features have been observed in other extinct avian species,
          challenging its transitional status.{" "}
          <Text type="secondary">
            [Source: Feduccia, A., <i>The Origin and Evolution of Birds</i>]
          </Text>
          {"\n\n"}- <Text mark>Australopithecus (e.g., Lucy):</Text> Long
          considered a human ancestor, but her gait was distinct from modern
          humans, and her cranial and manual features fall within the{" "}
          <Text underline>ape range</Text>. Experts like{" "}
          <Text strong>Lord Solly Zuckerman</Text> and{" "}
          <Text strong>Charles Oxnard</Text> argue Australopithecines are not
          direct ancestors but an extinct side branch.{" "}
          <Text type="secondary">
            [References: Zuckerman and Oxnard’s anatomical studies]
          </Text>
          {"\n\n"}- <Text mark>Pakicetus:</Text> Originally reconstructed from
          limited fossil material (<Text code>a jawbone</Text>), and prematurely
          presented as a semi-aquatic whale ancestor. Later, more complete
          fossils revealed it was <Text strong>fully terrestrial</Text> and bore
          little resemblance to whales. The initial portrayal was driven more by{" "}
          <Text type="danger">evolutionary expectations</Text> than actual data.{" "}
          <Text type="secondary">
            [Reference: Gingerich et al., 2001; criticism by Phillip Johnson]
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>This raises an important question:</Text> If scientific
          models can be drastically revised, questioned, or even overturned—why
          are religious traditions not given the same benefit of historical and
          contextual understanding? The bias is glaring: when secular science
          updates, it’s called "progress"; when religion explains context, it’s
          labeled "apologetics."
        </Paragraph>
        <Paragraph>
          Selective skepticism is not scholarship—it’s ideology. Those who
          weaponize science against faith while ignoring its internal
          controversies reveal their agenda: not the pursuit of truth, but the
          preservation of narrative dominance. Islam invites reasoned critique,
          but it demands fairness—something often absent in modern polemics.
        </Paragraph>
        <Title level={4}>
          2. The Microevolution vs. Macroevolution Fallacy
        </Title>
        <Paragraph>
          One of the most frequently employed defenses of Darwinian theory is
          the claim that{" "}
          <Text strong>
            "macroevolution is simply microevolution over long periods of time."
          </Text>{" "}
          While this may appear convincing at first glance, it commits a{" "}
          <Text type="danger">fundamental equivocation fallacy</Text>—using one
          definition of a word to prove a distinctly different concept.
        </Paragraph>
        <Paragraph>
          <Text mark>Microevolution</Text> refers to small, observable changes
          within a species—such as variations in beak size among finches or
          changes in fur color. These changes are typically the result of{" "}
          <Text code>gene shuffling</Text>, selection, or loss of existing
          genetic information. They are well-documented and undisputed within
          both scientific and creationist circles. However, crucially,{" "}
          <Text underline>
            they do not introduce new functional genetic information
          </Text>
          , nor do they produce new body plans or organs.
        </Paragraph>
        <Paragraph>
          <Text mark>Macroevolution,</Text> on the other hand, refers to the
          emergence of entirely new species, organs, and complex biological
          structures—requiring{" "}
          <Text strong>vast increases in functional genetic information</Text>.
          No known natural process has been{" "}
          <Text type="warning">empirically observed</Text> to produce such
          innovations. The mechanisms observed in microevolution often lead to{" "}
          <Text type="danger">specialization or reduction in genetic diversity</Text>,
          not biological novelty. For example,{" "}
          <Text underline>antibiotic resistance in bacteria</Text> frequently
          involves the loss or disabling of a gene (such as a protein pump), not
          the creation of a new one.
        </Paragraph>
        <Paragraph>
          The extrapolation from microevolution to macroevolution is not a
          conclusion derived from observation—it is a{" "}
          <Text italic>philosophical assumption</Text> layered over limited
          data. The two concepts operate on entirely different scales, both
          biologically and informationally, and{" "}
          <Text type="danger">
            conflating them is scientifically misleading
          </Text>
          .
        </Paragraph>
        <Paragraph>
          <Text italic>
            “Variation within a type is not evidence for the origin of that
            type.”
          </Text>{" "}
          —{" "}
          <Text italic>Dr. Michael Denton, Evolution: A Theory in Crisis</Text>
        </Paragraph>
        <Title level={4}>3. Can Natural Selection Build Complex Systems?</Title>
        <Paragraph>
          A widely repeated assertion in evolutionary biology is that complexity
          does not require a designer—natural selection can construct it
          incrementally through countless small, beneficial changes. While this
          explanation may sound plausible in theory, it grossly oversimplifies
          the actual challenges and fails to address several critical scientific
          objections:
        </Paragraph>
        <Paragraph>
          - <Text mark>Irreducible Complexity:</Text> Some biological systems
          exhibit an <Text strong>all-or-nothing architecture</Text>, where
          every component is essential for functionality.{" "}
          <Text code>
            The bacterial flagellum, the blood clotting cascade, and ATP
            synthase
          </Text>{" "}
          are prime examples. If even one part is missing, the system ceases to
          function. Since intermediate stages would offer no selective
          advantage, natural selection has no explanatory power in constructing
          such systems.{" "}
          <Text italic>
            [Reference: Behe, <Text underline>Darwin’s Black Box</Text>]
          </Text>
        </Paragraph>
        <Paragraph>
          - <Text mark>The Information Problem:</Text> DNA stores complex,
          specified information akin to a digital code. According to information
          theory,{" "}
          <Text type="danger">random mutations lack the creative capacity</Text>{" "}
          to generate the kind of meaningful, ordered information required to
          build new organs or body plans. The probability of such highly
          functional code emerging without intelligent input is{" "}
          <Text strong>statistically negligible</Text>.{" "}
          <Text italic>
            [Reference: Dr. Werner Gitt,{" "}
            <Text underline>In the Beginning Was Information</Text>]
          </Text>
        </Paragraph>
        <Paragraph>
          - <Text mark>Mathematical Improbability:</Text> The likelihood of
          accumulating the specific, coordinated mutations necessary to form
          complex structures such as <Text code>wings, eyes, or lungs</Text>
          —within the timeframe allowed by the fossil record—is{" "}
          <Text type="warning">astronomically low</Text>. Mutation and
          selection, even when acting over millions of years, appear
          insufficient when analyzed through realistic probabilistic models.{" "}
          <Text italic>
            [Reference: Sanford, J.C., <Text underline>Genetic Entropy</Text>]
          </Text>
        </Paragraph>
        <Paragraph>
          <Text strong>
            Design remains the more rational and parsimonious inference when
            confronted with purposeful, integrated complexity—just as we
            attribute software to programmers and machines to engineers.
          </Text>{" "}
          To deny this in biology, while affirming it in every other domain,
          reveals more about philosophical biases than scientific evidence.
        </Paragraph>
        <Title level={4}>
          4. Fraud and Misrepresentation in the Fossil Record
        </Title>
        <Paragraph>
          Evolutionary theory is frequently presented as an unshakable
          scientific consensus, grounded in an objective and self-correcting
          process. However, history reveals that several high-profile forgeries
          and misinterpretations have not only misled the public but also shaped
          academic discourse for decades. These cases expose a deeper issue:
          that <Text strong>ideological commitment</Text> can, at times,
          override scientific rigor.
        </Paragraph>
        <Paragraph>
          - <Text mark>Piltdown Man:</Text> Perhaps the most infamous
          paleoanthropological hoax, Piltdown Man was a{" "}
          <Text type="danger">fraudulent "missing link"</Text> created by
          combining a medieval human skull with an orangutan jaw. This forgery
          misled the scientific community for over 40 years and was used to
          support evolutionary narratives despite early doubts about its
          authenticity.
        </Paragraph>
        <Paragraph>
          - <Text mark>Haeckel’s Embryos:</Text> Ernst Haeckel produced drawings
          of vertebrate embryos that greatly exaggerated their similarities in
          order to support his theory of recapitulation (
          <Text italic>"ontogeny recapitulates phylogeny"</Text>). Despite being{" "}
          <Text type="danger">exposed as fraudulent</Text> in the 19th century,
          these drawings were reproduced in biology textbooks well into the 20th
          century and still persist in some modern educational materials.
        </Paragraph>
        <Paragraph>
          - <Text mark>Archaeoraptor:</Text> In 1999,{" "}
          <Text italic>National Geographic</Text> unveiled what it called a{" "}
          <Text strong>"missing link"</Text> between dinosaurs and birds. This
          fossil was later exposed as a{" "}
          <Text type="warning">composite forgery</Text>, cobbled together from
          parts of different species. It passed through peer review and was
          celebrated in mainstream media before being debunked.
        </Paragraph>
        <Paragraph>
          <Text strong>
            These incidents are not trivial anomalies—they reflect a pattern
            where confirmation bias, media sensationalism, and ideological
            allegiance have occasionally compromised the integrity of
            evolutionary science.
          </Text>{" "}
          The persistence of such errors in academic and public discourse
          suggests that the narrative, rather than the evidence, is sometimes
          driving the conclusions.
        </Paragraph>
        <Title level={4}>5. Misleading Narratives About “Species Change”</Title>
        <Paragraph>
          A common argument in support of Darwinian evolution is that we have
          observed many species change over time—horses, whales, birds, even
          humans. However, the core issue is not whether change occurs, but{" "}
          <Text strong type="warning">
            what kind of change
          </Text>{" "}
          it is, and in{" "}
          <Text strong type="warning">
            which direction
          </Text>{" "}
          it points. The fossil evidence often reveals{" "}
          <Text type="danger">complexity</Text>,{" "}
          <Text type="danger">ambiguity</Text>, and{" "}
          <Text type="danger">discontinuity</Text> rather than the smooth,
          linear progression suggested by textbooks.
        </Paragraph>
        <Paragraph>
          - <Text mark>Horse Evolution:</Text>{" "}
          <Text type="secondary">
            Frequently presented as a classic example of linear evolutionary
            progression
          </Text>
          , the horse fossil record is{" "}
          <Text type="danger">far more chaotic</Text>. It reveals a mosaic of
          overlapping species with diverse sizes and traits,{" "}
          <Text type="warning">lacking a consistent upward trend</Text>. The
          neat sequence from Eohippus to Equus is an{" "}
          <Text type="danger">oversimplification</Text>. [Reference: Heribert
          Nilsson, <Text italic>Synthetische Artbildung</Text>]
        </Paragraph>
        <Paragraph>
          - <Text mark>Whale Evolution:</Text> The supposed transition from
          land-dwelling mammals to fully aquatic whales requires{" "}
          <Text type="warning">multiple major anatomical transformations</Text>:
          development of blowholes, conversion of limbs to flippers, formation
          of echolocation, and reconfiguration of reproductive and respiratory
          systems. The fossil evidence consists of{" "}
          <Text type="danger">scattered, incomplete specimens</Text> and{" "}
          <Text type="danger">speculative reconstructions</Text>—not a
          step-by-step trail.
        </Paragraph>
        <Paragraph>
          - <Text mark>Human Evolution:</Text> The alleged evolutionary tree
          leading from Australopithecus to Homo sapiens is{" "}
          <Text type="warning">highly contested</Text> within paleoanthropology
          itself. New discoveries frequently reshape the tree into a{" "}
          <Text type="danger">bush—full of dead ends</Text>,{" "}
          <Text type="danger">reversals</Text>, and{" "}
          <Text type="danger">uncertain relationships</Text>. There is{" "}
          <Text type="danger">no universally accepted lineage</Text> that
          clearly bridges the gap from apes to modern humans.
        </Paragraph>
        <Paragraph>
          <Text strong type="danger">
            What we observe is variation within kinds or interpretive
            storytelling applied to ambiguous fossils—not empirical evidence of
            macroevolutionary transitions.
          </Text>{" "}
          <Text type="success">Scientific humility</Text> demands we acknowledge
          the <Text type="warning">limits of inference</Text> and avoid
          conflating variation with transformation.
        </Paragraph>
        <Title level={4}>
          6. Is Evolution Truly Testable, Predictive, and Self-Correcting?
        </Title>
        <Paragraph>
          Evolutionary proponents often argue that the theory may not be
          perfect, but it is{" "}
          <Text strong type="success">
            testable
          </Text>
          ,{" "}
          <Text strong type="success">
            predictive
          </Text>
          , and{" "}
          <Text strong type="success">
            refined over time
          </Text>
          . However, upon closer scrutiny, these claims amount more to{" "}
          <Text type="warning">narrative reassurance</Text> than empirical
          reality. Evolutionary theory, particularly in its grand claims,
          operates as a <Text type="danger">philosophical framework</Text>{" "}
          applied to biology— often interpreting evidence rather than being
          derived from it.
        </Paragraph>
        <Paragraph>
          - <Text mark>Testability:</Text>{" "}
          <Text type="warning">
            Darwinian evolution deals primarily with unrepeatable historical
            events
          </Text>
          . Claims about transitions that occurred millions of years ago cannot
          be directly observed, repeated, or falsified in the lab. Unlike{" "}
          <Text type="success">operational science</Text>, which tests
          hypotheses in real time, evolutionary claims rely on{" "}
          <Text type="danger">assumptions about the past</Text> that are often
          beyond verification.
        </Paragraph>
        <Paragraph>
          - <Text mark>Predictive Power:</Text> Many evolutionary predictions
          have <Text type="danger">failed</Text> or been{" "}
          <Text type="warning">quietly abandoned</Text>. So-called{" "}
          <Text type="secondary">“vestigial organs”</Text> like the appendix or
          tonsils, once claimed to be useless remnants, are now recognized as
          having <Text type="success">important immune functions</Text>. “Junk
          DNA,” too, has been shown to contain{" "}
          <Text type="success">regulatory elements</Text> crucial to gene
          expression. Initial assumptions of{" "}
          <Text type="danger">simple cell structure</Text>{" "}
          have been shattered by modern microbiology, which reveals cells as{" "}
          <Text type="success">intricate factories</Text> of interdependent
          processes.
        </Paragraph>
        <Paragraph>
          - <Text mark>Refinement or Rescue?</Text> When fossil evidence
          contradicts the expected evolutionary timeline,{" "}
          <Text type="warning">dating methods are revised</Text> to preserve the
          theory. When complex, similar features appear in unrelated species,
          they are labeled as{" "}
          <Text type="secondary">“convergent evolution”</Text>— a descriptive
          term that <Text type="danger">lacks mechanistic explanation</Text>.
          These <Text type="warning">ad hoc adjustments</Text> reflect{" "}
          <Text type="danger">theory-protection</Text> rather than genuine
          falsifiability.
        </Paragraph>
        <Paragraph>
          <Text strong type="danger">
            In essence, evolution is not “science” in the strict empirical
            sense—it functions as a lens through which evidence is interpreted.
            While minor adaptation (microevolution) is observable and testable,
            large-scale macroevolution lacks sufficient fossil, genetic,
            mathematical, and biochemical support.
          </Text>{" "}
          The{" "}
          <Text underline type="success">
            design inference
          </Text>
          , by contrast, offers a more coherent, predictive, and empirically
          consistent model to account for the{" "}
          <Text type="success">specified complexity</Text> and{" "}
          <Text type="success">informational architecture</Text> observed in
          life.
        </Paragraph>
        <Title level={4}>
          7. Conclusion: Reassessing the Evolutionary Paradigm
        </Title>
        <Paragraph>
  The debate between Darwinian evolution and intelligent design is not merely
  scientific—it is{" "}
  <Text type="warning">philosophical</Text>,{" "}
  <Text type="warning">ideological</Text>, and{" "}
  <Text type="warning">epistemological</Text>. While evolution is often presented
  as an <Text type="success">objective, self-correcting framework</Text>, critical
  examination reveals a system built on{" "}
  <Text type="danger">extrapolation</Text>,{" "}
  <Text type="danger">reinterpretation</Text>, and{" "}
  <Text type="danger">selective data usage</Text>. Its foundational claims—whether
  about transitional fossils, macroevolution, or predictive power—face serious{" "}
  <Text type="danger">scientific and logical challenges</Text>.
</Paragraph>

<Paragraph>
  Historical forgeries, <Text type="warning">conceptual ambiguities</Text>, and
  reliance on narrative rather than{" "}
  <Text type="danger">empirical falsifiability</Text> expose the vulnerabilities of
  evolutionary theory as it is commonly taught. Meanwhile, the increasing
  recognition of <Text type="success">biological information</Text>,{" "}
  <Text type="success">irreducible complexity</Text>, and{" "}
  <Text type="success">fine-tuned systems</Text> in living organisms points toward
  a more rational and causally adequate explanation:{" "}
  <Text strong type="success">intelligent design.</Text>
</Paragraph>

<Paragraph>
  <Text strong type="warning">
    It is not “anti-science” to question evolution—it is pro-science to demand
    testability, clarity, and integrity.
  </Text>{" "}
  If science is truly about following the evidence wherever it leads, then the{" "}
  <Text underline type="success">design inference</Text> deserves fair consideration
  rather than dismissal through <Text type="danger">ideological gatekeeping</Text>.
</Paragraph>

<Paragraph>
  Furthermore, if critics of creationism invoke{" "}
  <Text type="warning">moral outrage</Text> or{" "}
  <Text type="warning">ethical standards</Text> to reject divine explanations, they
  must also turn their scrutiny toward{" "}
  <Text type="danger">materialist assumptions</Text> that provide no grounding for{" "}
  <Text type="danger">objective morality</Text>,{" "}
  <Text type="danger">consciousness</Text>, or{" "}
  <Text type="danger">purpose</Text>. Why is the focus so disproportionately aimed
  at theism, while <Text type="warning">naturalistic dogmas</Text> are shielded
  from equal scrutiny?
</Paragraph>

<Paragraph>
  In an age where science is often conflated with{" "}
  <Text type="danger">scientism</Text>, and education sometimes serves{" "}
  <Text type="danger">ideology</Text> more than inquiry, it is essential to restore{" "}
  <Text type="success">philosophical balance</Text>. Evolution may offer a
  framework, but it is not the only one—nor is it the most coherent.{" "}
  <Text type="success">Creationism</Text> and{" "}
  <Text type="success">design theory</Text>, rooted in both{" "}
  <Text type="success">reason</Text> and{" "}
  <Text type="success">revelation</Text>, remain intellectually viable and
  scientifically relevant alternatives in the modern discourse.
</Paragraph>

      </Typography>
      <CommentBox
        title={"Is Darwinian evolution hypothesis better than believing in Creationism?"}
        url={"https://defenseofislam.github.io/web/darwinism/dn-vs-ct/1"}
      />
    </Content>
  );
}

export default DarwinComponent1;
