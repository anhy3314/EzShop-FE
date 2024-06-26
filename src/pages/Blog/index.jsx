import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img } from "../../components";
import SalesShopPagination from "../../components/SalesShopPagination";
export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Ezshop</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white-A700">
        <div className="container-md mt-[19px] flex flex-col gap-[11px] md:p-5">
          <div className="flex flex-wrap gap-[7px]">
            <Text size="md" as="p" className="self-end">
              Trang chủ
            </Text>
            <Text size="md" as="p" className="self-end">
              /
            </Text>
            <Text size="md" as="p" className="self-start !text-blue_gray-600">
              Bài viết
            </Text>
          </div>
          <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
            <Text size="7xl" as="p">
              Bài viết
            </Text>
            <div className="flex flex-col items-center gap-[63px] self-stretch sm:gap-[31px]">
              <div className="grid grid-cols-3 justify-center gap-7 self-stretch md:grid-cols-2 sm:grid-cols-1">
                <a>
                  <div className="flex w-full flex-col gap-6">
                    <div className="relative h-[300px] md:h-auto">
                      <Img
                        src="images/img_cute_girl_works.png"
                        alt="mẹo_thủ_thuật"
                        className="h-[300px] w-full rounded-md object-cover"
                      />
                      <Img
                        src="images/img_image_123.png"
                        alt="mẹo_thủ_thuật"
                        className="absolute bottom-0 left-0 right-0 top-0 m-auto h-[300px] w-full rounded-md object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-3.5">
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        Mẹo & Thủ thuật
                      </Text>
                      <Text size="3xl" as="p">
                        Cách định giá và thanh lý đồ cũ nhanh nhất
                      </Text>
                      <Text as="p" className="!font-normal !text-blue_gray-600">
                        10 - 6 - 2023
                      </Text>
                    </div>
                  </div>
                </a>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_300x448.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        10 cửa hàng uy tín nhất năm - EZSHOP
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_1.png"
                      alt="cutegirlworks"
                      className="h-[300px] rounded-md object-cover"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Làm thế nào mua đồ trên EZSHOP hiệu quả?
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_2.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_3.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Mẹo tái chế quần áo cực chất
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      11 - 10 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_4.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        5 cách kiểm tra thật - giả khi mua đồ cũ
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_296x448.png"
                      alt="cutegirlworks"
                      className="h-[296px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Thử nhuộm áo tại nhà
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      10 - 7 - 2023
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_5.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Mẹo vặt cuộc sống bạn cần biết
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      19 - 6 - 2019
                    </Text>
                  </div>
                </div>
                <div className="flex w-full flex-col items-start gap-6">
                  <a>
                    <Img
                      src="images/img_cute_girl_works_6.png"
                      alt="cutegirlworks"
                      className="h-[300px] w-full rounded-md object-cover md:h-auto"
                    />
                  </a>
                  <div className="flex flex-col items-start gap-3.5">
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      Mẹo & Thủ thuật
                    </Text>
                    <a>
                      <Text size="3xl" as="p">
                        Hãy là người tiêu dùng thông minh!
                      </Text>
                    </a>
                    <Text as="p" className="!font-normal !text-blue_gray-600">
                      31 - 10 - 2019
                    </Text>
                  </div>
                </div>
              </div>
              <SalesShopPagination
                text120of300="1 – 20 trên 90 tìm kiếm"
                className="w-[35%] gap-5 md:w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
