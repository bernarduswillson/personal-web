"use client"

// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

// Utils
import { getSectionHeight } from '@/lib/sectionHeight';

// Assets
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

const Contact = (): JSX.Element => { 
  // Projects and Contact's section height
  const [startPixel1, setStartPixel1] = useState(0);
  const [endPixel1, setEndPixel1] = useState(0);
  const [height1, setHeight1] = useState(0);
  const [startPixel2, setStartPixel2] = useState(0);
  const [endPixel2, setEndPixel2] = useState(0);

  const sectionId1 = 'Projects';
  useEffect(() => {
    const sectionProjects = getSectionHeight<number>(sectionId1);
    setStartPixel1(sectionProjects.startPixel);
    setEndPixel1(sectionProjects.endPixel);
    setHeight1(sectionProjects.height);
  }, [startPixel1, endPixel1]);

  const sectionId2 = 'Contact';
  useEffect(() => {
    const sectionContact = getSectionHeight<number>(sectionId2);
    setStartPixel2(sectionContact.startPixel);
    setEndPixel2(sectionContact.endPixel);
  }, [startPixel2, endPixel2]);

  // Contact's animation
  const { scrollY } = useScroll();
  // translate
  const yt = useTransform(scrollY, [startPixel2 - (height1/2), endPixel2], [250, -500]);

  // Email
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    sender: '',
    senderEmail: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    emailjs.init('N2dDOTsDnBdqLg_cl');
  }, []);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const serviceId = "service_i80ajr6";
    const templateId = "template_xl1pgwn";
    try {
      setLoading(true);
      await emailjs.send(serviceId, templateId, formData);
      console.log(formData);
      setSubmitSuccess(true)
      setFormData({
        sender: '',
        senderEmail: '',
        message: '',
      });

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  
  // Toast
  const { toast } = useToast()
  useEffect(() => {
    if (submitSuccess) {
      toast({
        title: "Email sent",
        description: "I will get back to you as soon as possible.",
      });
      setSubmitSuccess(false);
    }
  }, [submitSuccess, toast]);

  return (
    <div id="Contact" className='h-screen relative dark:bg-black bg-[#FFFFFF] transition duration-400 flex items-center justify-center'>
      <div className="w-full relative">
        <motion.div className="z-[10] mx-[15vw]" style={{ y: yt }}>
          {/* Title */}
          <div className="">
            <h2 className="text-lg font-normal lg:text-xl opacity-80">
              Contact me and
            </h2>
            <h1 className="text-[40px] sm:text-[50px] font-extrabold mb-8 mt-[-10px]">
              Let’s Get in Touch
            </h1>
          </div>

          {/* Table */}
          <form onSubmit={sendEmail}>
            <div className="border-2 border-primary py-10 px-[5vw]">
              <div className="md:flex gap-5">
                <div className="md:w-1/2 font-bold">
                  Name
                  <Input
                    type="text"
                    placeholder="Put your name here..."
                    className=""
                    name="sender"
                    value={formData.sender}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="md:w-1/2 mt-5 md:mt-0 font-bold">
                  Email
                  <Input
                    type="email"
                    placeholder="Put your email here..."
                    className=""
                    name="senderEmail"
                    value={formData.senderEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-5 font-bold">
                Message
                <Textarea
                  placeholder="Put your message here..."
                  className="mt-2"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" className="mt-10 font-extrabold px-10" disabled={loading}>
                  Send
                </Button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
  
export default Contact;
