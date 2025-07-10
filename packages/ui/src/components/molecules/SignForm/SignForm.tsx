"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState, useEffect } from "react";
import { IMaskInput } from 'react-imask';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, AtomButton, ReCaptcha } from "@repo/ui/atoms";
import { cn } from "@repo/ui/utils";


const formSchema = z.object({
    phone: z.string()
        .refine((value) => {
            return value.replace(/\D/g, '').length === 12;
        }, "Номер телефону повинен містити 12 цифр"),
    recaptcha: z.string().min(1, "Будь ласка, підтвердіть, що ви не робот"),
})

export const SignForm = () => {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
            recaptcha: "",
        },
    })

    // Відстеження змін форми
    useEffect(() => {
        const subscription = form.watch((value) => {
            console.log("Поточні значення форми:", value);
        });

        return () => subscription.unsubscribe();
    }, [form]);

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
        form.setValue("recaptcha", token || "");

        if (token) {
            form.clearErrors("recaptcha");
        }
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!recaptchaToken) {
            form.setError("recaptcha", {
                type: "manual",
                message: "Будь ласка, підтвердіть, що ви не робот"
            });
            return;
        } else {
            console.log(values.recaptcha);
        }

        setIsSubmitting(true);

        try {
            const recaptchaResponse = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: recaptchaToken }),
            });

            const recaptchaData = await recaptchaResponse.json();

            if (!recaptchaResponse.ok) {
                form.setError("recaptcha", {
                    type: "manual",
                    message: recaptchaData.error || "Помилка перевірки reCAPTCHA"
                });
                return;
            }

            form.reset();
            setRecaptchaToken(null);
            alert("Форму успішно відправлено!");

        } catch (error) {
            console.error('Помилка при відправці форми:', error);
            form.setError("recaptcha", {
                type: "manual",
                message: "Помилка при відправці форми. Спробуйте ще раз."
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={(e) => { e.preventDefault(); form.handleSubmit(onSubmit)(); }} className="flex flex-col items-start gap-y-[24px] my-[24px]">
                <div className="flex justify-start items-center gap-x-[24px]" >
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex justify-start items-center gap-x-[24px]">
                                <FormLabel className="whitespace-nowrap text-[20px] font-semibold">Введіть Ваш номер телефону :</FormLabel>
                                <div className="relative">
                                    <FormControl className="flex flex-col">
                                        <IMaskInput
                                            {...field}
                                            mask="+380 (00) 000-00-00"
                                            placeholder="+380 (__) ___ _ _"
                                            name="phone"
                                            className={cn(
                                                "text-[20px] bg-white rounded-[8px] border border-transparent px-[45px] py-[16px] outline-none bg-bg border-black/10 transition-all duration-300",
                                                "focus:border-yellow focus:ring-yellow focus:ring-[3px]",
                                            )}
                                            onAccept={(value: string) => {
                                                field.onChange(value);
                                            }}
                                        />
                                    </FormControl>
                                    <FormMessage className="absolute top-0 left-0 translate-y-[-100%]" />
                                </div>
                            </FormItem>
                        )}
                    />
                    <AtomButton
                        type="submit"
                        variant="form"
                        className="self-start"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Відправляємо..." : "Далі"}
                    </AtomButton>
                </div>
                <FormField
                    control={form.control}
                    name="recaptcha"
                    render={() => (
                        <FormItem className="relative">
                            <ReCaptcha
                                siteKey={process.env.GOOGLE_RECAPTCHA_SECRET_KEY || "your_site_key_here"}
                                onChange={handleRecaptchaChange}
                            />
                            <FormMessage className="absolute top-0 left-0 translate-y-[-100%]" />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};